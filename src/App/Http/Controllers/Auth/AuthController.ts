//import {User} from "@App/Models/User";
import {AuthorizationMiddleware} from "./../../Middleware/AuthorizationMiddleware";
import {JwtAuthenticationProvider} from "@envuso/authentication";
import {
	app,
	Authenticatable,
	Authentication,
	Controller,
	controller,
	DataTransferObject,
	dto,
	get,
	Hash,
	inject,
	middleware,
	post,
	resolve,
	response
} from "@envuso/core";
import {IsEmail, IsString, Length} from "class-validator";
import {StatusCodes} from "http-status-codes";

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

@middleware(new AuthorizationMiddleware())
@controller('/')
export class AuthController extends Controller {


	@post('/login')
	public async login(@dto() loginDto: LoginDTO) {

		const authentication = resolve(Authentication);

		if (!await authentication.attempt(loginDto)) {
			return {
				error : 'Invalid credentials.'
			}
		}

		const user = authentication.user();
		return {
			user  : user,
			token : authentication.getAuthProvider<JwtAuthenticationProvider>().issueToken((user as any)._id)
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

		const authentication = resolve(Authentication);

		authentication.authoriseAs(<typeof Authenticatable><unknown>user);

		return {
			user : authentication.user()
		}

	}

	@get('/user')
	public async user() {

		return {
			user : resolve(Authentication).user()
		}

	}

	@get('/')
	public async index() {
//		const apppp = app();
//		const users = await User.where<User>({}).get();
//
//		return response().setResponse({
//			users
//		}, StatusCodes.ACCEPTED)
	}

}
