import "reflect-metadata";
import {config} from 'dotenv';

config();
import {Log} from "@envuso/core/Common";
import {Envuso} from "@envuso/core";
import {FastifyReply, FastifyRequest} from "fastify";
import {ExceptionHandler} from "./App/Exceptions/ExceptionHandler";
import {Config} from "./Config";

global.disableConsoleLogs = false;

const envuso = new Envuso();

envuso.prepare(Config)
	.then(() => {
		envuso.addExceptionHandler(async (exception: Error, request: FastifyRequest, reply: FastifyReply) => {
			console.trace(exception);
			return ExceptionHandler.transform(exception, reply);
		});
	})
	.catch(error => {
		Log.error(error);
		console.trace(error);
	});

