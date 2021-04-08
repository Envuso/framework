import {AuthCredentialContract} from "@App/Contracts/AuthContracts";
import {ValidationException} from "@App/Exceptions/ValidationException";
import {AuthorizationMiddleware} from "@App/Http/Middleware/AuthorizationMiddleware";
import {User} from "@App/Models/User";
import { Auth, Hash  } from "@Core/Providers";
import {controller, dto, get, middleware, post} from "@Decorators";
import {Controller, DataTransferObject} from "@Providers/Http";
import {Transform} from "class-transformer";
import {IsAlphanumeric, IsEmail, IsNotEmpty, IsString, Length} from "class-validator";


class LoginBody extends DataTransferObject implements AuthCredentialContract {
	@IsEmail()
	@IsNotEmpty()
	public email: string;

	@Length(8, 255)
	password: string;
}

class RegistrationBody extends LoginBody {

	@IsNotEmpty()
	@Length(3, 25)
	displayName?: string;

	@Transform(({value}) => value.toLowerCase())
	@IsString()
	@IsAlphanumeric()
	@Length(3, 20)
	name: string;
}

@controller('/auth')
export class AuthController extends Controller {

	@post('/login')
	async login(@dto() loginBody: LoginBody) {

		if (!await Auth.attempt(loginBody)) {
			throw new ValidationException({
				message : 'Invalid credentials'
			});
		}

		return {
			user  : Auth.user(),
			token : Auth.user().generateToken()
		};
	}

	@post('/register')
	async register(@dto() registration: RegistrationBody) {

		if (!await Auth.canRegisterAs(registration)) {
			throw new ValidationException({
				username : 'Username is in use.'
			});
		}

		const user = await User.create<User>({
			name        : registration.name,
			email       : registration.email,
			password    : await Hash.make(registration.password),
			displayName : registration.displayName,
			createdAt   : new Date(),
		});

		Auth.loginAs(user);

		return {
			user  : Auth.user(),
			token : Auth.user().generateToken()
		}
	}

	@middleware(new AuthorizationMiddleware())
	@get('/user')
	async authedUser() {
		 return Auth.user();
	}

}


