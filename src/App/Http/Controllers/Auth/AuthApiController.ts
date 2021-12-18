import {
	Controller,
	controller,
	DataTransferObject,
	dto,
	get,
	JwtAuthenticationMiddleware,
	middleware,
	post,
	user,
} from "@envuso/core/Routing";
import {Hash} from "@envuso/core/Crypt";
import {IsEmail, IsString, Length} from "class-validator";
import {Auth} from "@envuso/core/Authentication";
import {User} from "../../../Models/User";

class LoginDTO extends DataTransferObject {
	@IsEmail()
	@IsString()
	email: string;

	@Length(6, 250)
	password: string;
}

class RegisterDTO extends LoginDTO {

	@Length(1)
	name: string;

	createdAt: Date;
}

@controller('/auth')
export class AuthApiController extends Controller {

	@post('/login')
	public async login(@dto() loginDto: LoginDTO) {

		if (!await Auth.attempt(loginDto)) {
			return {
				error : 'Invalid credentials.'
			};
		}

		const user = Auth.user<User>();

		return {
			user  : user,
			token : user.generateToken()
		};
	}

	@post('/register')
	public async register(@dto(false) registerDto: RegisterDTO) {

		await registerDto.validate();

		registerDto.createdAt = new Date();

		const user     = new User();
		user.email     = registerDto.email;
		user.name      = registerDto.name;
		user.password  = await Hash.make(registerDto.password);
		user.createdAt = registerDto.createdAt;
		await user.save();

		Auth.authoriseAs(user);

		return {
			user : Auth.user()
		};
	}

	@middleware(new JwtAuthenticationMiddleware())
	@get('/user')
	public async user(@user user: User) {
		return {
			user,
			id : Auth.id()
		};
	}

	@get('/user/:user')
	async getUser(user: User) {

		return user;
	}

}
