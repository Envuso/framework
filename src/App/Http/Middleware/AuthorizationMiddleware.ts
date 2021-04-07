import {FastifyReply, FastifyRequest} from "fastify";
import {injectable} from "inversify";
import {resolve} from "@Core/Helpers";
import {Auth} from "@Providers/Auth/Auth";
import {AuthProvider} from "@Providers/Auth/AuthProvider";
import {Middleware} from "@Providers/Http/Controller/Middleware";
import {UnauthorisedException} from "@App/Exceptions/UnauthorisedException";


@injectable()
export class AuthorizationMiddleware extends Middleware {

	public async handler(request: FastifyRequest, response: FastifyReply) {
		await resolve(AuthProvider).authoriseRequest(request, response);

		if(!Auth.check()){
			throw new UnauthorisedException();
		}
	}

}
