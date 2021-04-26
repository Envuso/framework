import {Middleware, RequestContext} from "@envuso/core/Routing";
import {resolve} from "@envuso/core/AppContainer";
import {Auth, Authentication, JwtAuthenticationProvider} from "@envuso/core/Authentication";
import {UnauthorisedException} from "../../Exceptions/UnauthorisedException";
import {User} from "../../Models/User";


export class AuthorizationMiddleware extends Middleware {

	public async handler(context: RequestContext) {

		const authentication = resolve(Authentication);

		const authedUser = await Auth
			.getAuthProvider(JwtAuthenticationProvider)
			.authoriseRequest(context.request);

		if (!authedUser) {
			throw new UnauthorisedException();
		}

		authentication.authoriseAs(authedUser);

		if (!authentication.check()) {
			throw new UnauthorisedException();
		}

	}

}
