
import {Authentication, JwtAuthenticationProvider} from "@envuso/core/Authentication";
import {Controller, controller, DataTransferObject, dto, get, middleware, post} from "@envuso/core/Routing";
import {resolve} from "@envuso/core/AppContainer";
import {Authenticatable, Hash} from "@envuso/core/Common";
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

	constructor(public authentication? : Authentication) {
		super()
	}

	@post('/login')
	public async login(@dto() loginDto: LoginDTO) {

		if (!await this.authentication.attempt(loginDto)) {
			return {
				error : 'Invalid credentials.'
			}
		}

		const user = this.authentication.user();
		return {
			user  : user,
			token : this.authentication.getAuthProvider<JwtAuthenticationProvider>().issueToken((user as any)._id)
		}
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

		this.authentication.authoriseAs(<typeof Authenticatable><unknown>user);

		return {
			user : this.authentication.user()
		}
	}

	@middleware(new AuthorizationMiddleware())
	@get('/user')
	public async user() {
		return {
			user : this.authentication.user()
		}
	}

}
