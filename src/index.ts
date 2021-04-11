import {Envuso, Log, response} from "@envuso/core";
import {config} from 'dotenv';
import {FastifyReply, FastifyRequest} from "fastify";
import {StatusCodes} from "http-status-codes";

config();

//@ts-ignore
global.disableConsoleLogs = false;

const envuso = new Envuso();

envuso.prepare()
	.then(() => {
		envuso.addExceptionHandler(async (exception: Error, request: FastifyRequest, reply: FastifyReply) => {

			console.trace(exception);

			return response().setResponse({
				error : exception
			}, StatusCodes.INTERNAL_SERVER_ERROR);

		});
	})
	.catch(error => {
		Log.error(error)
		console.trace(error);
	});
