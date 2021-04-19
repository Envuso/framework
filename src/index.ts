import {Envuso, Log, response} from "@envuso/core";
import {config} from 'dotenv';
import {FastifyReply, FastifyRequest} from "fastify";
import {StatusCodes} from "http-status-codes";
import {Config} from "./Config/index";

config();

//@ts-ignore
global.disableConsoleLogs = false;

const envuso = new Envuso();
//const mainDir = require.main.path;

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
		Log.error(error)
		console.trace(error);
	});

