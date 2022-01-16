import {Auth} from "@envuso/core/Authentication";
import {Hash} from "@envuso/core/Crypt";
import {Inertia} from "@envuso/core/Packages/Inertia/Inertia";
import {back, Controller, controller, dto, get, post, redirect, response} from "@envuso/core/Routing";
import {session} from "@envuso/core/Session";
import {LoginRequestDto} from "../../../DataTransferObjects/Authentication/LoginRequestDto";
import {RegistrationRequestDto} from "../../../DataTransferObjects/Authentication/RegistrationRequestDto";
import {User} from "../../../Models/User";

@controller('/auth')
export class FrontendAuthenticationController extends Controller {

	@post('/logout')
	async logout() {
		await session().invalidate();

		return redirect('/auth/login')
	}

	@get('/login')
	showLogin() {
		return Inertia.render('Authentication/Login');
	}

	@post('/login')
	async login(@dto() body: LoginRequestDto) {

		if (!await Auth.attempt(body)) {
			return back().with('errors', {email : 'The provided credentials do not match our records.'});
		}

		const user = await User.find(body.email, 'email');

		Auth.authoriseAs(user);

		return response().redirect('/dashboard');
	}

	@get('/register')
	showRegister() {
		return Inertia.render('Authentication/Register');
	}

	@post('/register')
	async register(@dto(false) body: RegistrationRequestDto) {

		if (await User.query().where('email', body.email.toLowerCase()).first()) {
			return back().with('errors', {email : 'This email has already been taken.'});
		}

		await body.validate();

		const user     = new User();
		user.email     = body.email;
		user.name      = body.name;
		user.password  = await Hash.make(body.password);
		user.createdAt = new Date();
		await user.save();

		Auth.authoriseAs(user);

		return response().redirect('/dashboard');
	}
}
