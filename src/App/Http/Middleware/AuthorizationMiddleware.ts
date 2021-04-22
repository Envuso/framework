import {Middleware, RequestContext} from "@envuso/core/Routing";
import {resolve} from "@envuso/core/AppContainer";
import {Authentication} from "@envuso/core/Authentication";
import {UnauthorisedException} from "../../Exceptions/UnauthorisedException";
import {Authenticatable} from "@envuso/core/Common";


export class AuthorizationMiddleware extends Middleware {

	public async handler(context: RequestContext) {

		const authentication = resolve(Authentication);

		const user = await authentication
			.getAuthProvider()
			.authoriseRequest(context.request);

		if (!user) {
			throw new UnauthorisedException();
		}

		authentication.authoriseAs(<typeof Authenticatable>user);

		if (!authentication.check()) {
			throw new UnauthorisedException();
		}

	}

}
