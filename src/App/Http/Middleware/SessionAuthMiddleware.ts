import {resolve} from "@envuso/core/AppContainer";
import {Middleware, RequestContext} from "@envuso/core/Routing";
import {Authentication, SessionAuthenticationProvider} from "@envuso/core/Authentication";
import {UnauthorisedException} from "../../Exceptions/UnauthorisedException";


export class SessionAuthMiddleware extends Middleware {

	public async handle(context: RequestContext) {

		const authentication = resolve(Authentication);
		const provider       = authentication.getAuthProvider(SessionAuthenticationProvider);
		const authedUser     = await provider.authoriseRequest(context.request);

		if (!authedUser) {
			throw new UnauthorisedException();
		}

		authentication.authoriseAs(authedUser);

		if (!authentication.check()) {
			throw new UnauthorisedException();
		}

	}

}
