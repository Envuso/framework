import {Inertia} from "@envuso/core/Packages/Inertia/Inertia";
import {Controller, controller, get, middleware} from "@envuso/core/Routing";
import {SessionAuthenticationMiddleware} from "@envuso/core/Routing/Middleware/Middlewares/SessionAuthenticationMiddleware";

@middleware(new SessionAuthenticationMiddleware())
@controller('/dashboard')
export class DashboardController extends Controller {

	@get('/')
	viewDashboard() {
		return Inertia.render('Dashboard', {});
	}

}
