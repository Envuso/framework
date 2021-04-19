import {Authenticatable, Authentication, Middleware, RequestContext, resolve} from "@envuso/core";
import {UnauthorisedException} from "../../Exceptions/UnauthorisedException";


export class AuthorizationMiddleware extends Middleware {

	public async handler(context: RequestContext) {
//		await resolve(AuthenticationProvider).authoriseRequest(request, response);

		const auth = resolve(Authentication);

		const user = await auth
			.getAuthProvider()
			.authoriseRequest(context.request);

		if (!user) {
			throw new UnauthorisedException();
		}

		auth.authoriseAs(<typeof Authenticatable>user);

		if (!auth.check()) {
			throw new UnauthorisedException();
		}
	}

}
