import "reflect-metadata";
import {config} from 'dotenv';
config();
import {Log} from "@envuso/core/Common";
import {Envuso} from "@envuso/core/Core";
import {response} from "@envuso/core/Routing";
import {FastifyReply, FastifyRequest} from "fastify";
import {StatusCodes} from "http-status-codes";
import {Config} from "./Config";


//@ts-ignore
global.disableConsoleLogs = false;

const envuso = new Envuso();

envuso.prepare(Config)
	.then(() => {
		envuso.addExceptionHandler(async (exception: Error, request: FastifyRequest, reply: FastifyReply) => {

			console.trace(exception);

			return response().setResponse({
				error : exception
			}, StatusCodes.INTERNAL_SERVER_ERROR);

		});
	})
	.catch(error => {
		Log.error(error);
		console.trace(error);
	});

