import {JwtAuthenticationProvider} from "@envuso/core/Authentication";
import {Auth} from "@envuso/core/Authentication";
import {Controller, controller, DataTransferObject, dto, get, middleware, post, response} from "@envuso/core/Routing";
import {Hash} from "@envuso/core/Common";
import {User} from "../../../Models/User";
import {AuthorizationMiddleware} from "../../Middleware/AuthorizationMiddleware";
import {IsEmail, IsString, Length} from "class-validator";


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

@controller('/')
export class AuthController extends Controller {

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
		registerDto.throwIfFailed();
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

	@middleware(new AuthorizationMiddleware())
	@get('/user')
	public async user() {
		const user = Auth.user<User>();

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
