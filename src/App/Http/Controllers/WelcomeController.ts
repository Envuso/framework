import {Str} from "@envuso/core/Common";
import {Inertia} from "@envuso/core/Packages/Inertia/Inertia";
import {
	Controller,
	controller,
	get, post, view
} from "@envuso/core/Routing";

@controller('/')
export class WelcomeController extends Controller {

	@get('*')
	public async welcome() {
		return view('Welcome');
	}

	@get('/hello')
	public async hello() {
		// This will render an Inertia/Vue frontend.
		// You can change the Inertia App layout in /src/Resources/Views/InertiaApp.edge
		// You can also change this default layout in /src/Config/InertiaConfiguration.ts
		return Inertia.render('Hello', {
			message : 'Hello World!'
		});
	}

	@post('/hello')
	public async randomHello() {
		return Inertia.render('Hello', {
			message : `Hello ${Str.random(10)}!`
		});
	}

}
