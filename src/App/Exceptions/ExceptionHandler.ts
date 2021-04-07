import {Log} from "@Providers/Log/Log";
import {FastifyReply} from "fastify";
import {JsonWebTokenError, TokenExpiredError} from "jsonwebtoken";
import {Exception} from "./Exception";
import {UnauthorisedException} from "./UnauthorisedException";
import {ValidationException} from "./ValidationException";

export class ExceptionHandler {

	static transform(exception: Error, response: FastifyReply) {

		if (exception instanceof ValidationException) {
			return this.responseFor(exception, response);
		}

		if (exception instanceof UnauthorisedException) {
			return this.responseFor(exception, response);
		}

		if (exception instanceof JsonWebTokenError) {
			exception = new UnauthorisedException(exception.message);
		}

		if (exception instanceof TokenExpiredError) {
			exception = new UnauthorisedException(exception.message);
		}

		if (exception instanceof Exception) {
			return response.status(exception.code()).send(exception.response);
		}

		Log.error(exception.toString());
		console.trace(exception);

		return response.status(500).send(exception);
	}

	private static responseFor(exception: Exception, response: FastifyReply) {
		return response
			.status(exception.code())
			.send(exception.response);
	}
}
