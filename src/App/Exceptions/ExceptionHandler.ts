import {ExceptionHandler as BaseExceptionHandler} from '@envuso/core/Common/Exception/ExceptionHandler';

export class ExceptionHandler extends BaseExceptionHandler {

}


//import {Exception, Log} from "@envuso/core/Common";
//import {DtoValidationException} from "@envuso/core/Routing";
//import {FastifyReply} from "fastify";
//import {StatusCodes} from "http-status-codes";
//import {JsonWebTokenError, TokenExpiredError} from "jsonwebtoken";
//import {UnauthorisedException} from "./UnauthorisedException";
//import {ValidationException} from "./ValidationException";
//
//export class ExceptionHandler {
//
//	static transform(exception: Error, response: FastifyReply) {
//
//		if (exception instanceof ValidationException) {
//			return this.responseFor(exception, response);
//		}
//
//		if (exception instanceof DtoValidationException) {
//			exception.code = StatusCodes.UNPROCESSABLE_ENTITY;
//			return this.responseFor(exception, response);
//		}
//
//		if (exception instanceof UnauthorisedException) {
//			return this.responseFor(exception, response);
//		}
//
//		if (exception instanceof JsonWebTokenError) {
//			exception = new UnauthorisedException(exception.message);
//		}
//
//		if (exception instanceof TokenExpiredError) {
//			exception = new UnauthorisedException(exception.message);
//		}
//
//		if (exception instanceof Exception) {
//			return response.status(exception.code).send(exception.response);
//		}
//
//		Log.error(exception.toString());
//		console.trace(exception);
//
//		return response.status(500).send(exception);
//	}
//
//	private static responseFor(exception: Exception, response: FastifyReply) {
//		return response
//			.status(exception.code)
//			.send(exception.response);
//	}
//}
