import {Inertia} from "@envuso/core/Packages/Inertia/Inertia";
import {back, Controller, controller, DataTransferObject, dto, get, post, response,} from "@envuso/core/Routing";
import {IsEmail, IsString, MinLength} from "class-validator";
import {Auth, SessionAuthenticationProvider} from "@envuso/core/Authentication";
import {User} from "../../../Models/User";

class LoginDTO extends DataTransferObject {

	@IsEmail()
	@IsString()
	email: string;

	@MinLength(6)

	password: string;

}


@controller('/login')
export class LoginController extends Controller {

	@get('/')
	show() {
		return Inertia.render('Authentication/Login');
	}

	@post('/')
	async login(@dto() body: LoginDTO) {
		if (!await Auth.attempt(body)) {
			return back().with('errors', {email : 'The provided credentials do not match our records.'});
		}

		const user = await User.find(body.email, 'email');

		Auth.authoriseAs(user);

		return response().redirect('/dashboard');
	}

}
