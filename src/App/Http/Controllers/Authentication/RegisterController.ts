import {Hash} from "@envuso/core/Crypt";
import {Inertia} from "@envuso/core/Packages/Inertia/Inertia";
import {back, Controller, controller, DataTransferObject, dto, get, post, response,} from "@envuso/core/Routing";
import {Confirmed} from "@envuso/core/Routing/DataTransferObject/Validators";
import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";
import {Auth} from "@envuso/core/Authentication";
import {User} from "../../../Models/User";

class RegisterDTO extends DataTransferObject {

	@IsEmail()
	@IsString()
	email: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(3)
	name: string;

	@MinLength(6)
	@Confirmed()
	password: string;
	@MinLength(6)
	password_confirmation: string;

}

@controller('/register')
export class RegisterController extends Controller {

	@get('/')
	show() {
		return Inertia.render('Authentication/Register');
	}

	@post('/')
	async register(@dto(false) body: RegisterDTO) {

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
