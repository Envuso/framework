import Environment from "@envuso/core/AppContainer/Config/Environment";
import {ClassTransformOptions} from "class-transformer/types/interfaces";
import {FastifyPlugin, FastifyPluginOptions, FastifyServerOptions} from "fastify";
import {FastifyCorsOptions} from "fastify-cors";
import {default as FastifyMultipart, FastifyMultipartOptions} from "fastify-multipart";
import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import {ServerConfiguration as ServerConfig} from "@envuso/core/Contracts/Server/ServerContract";
import {InjectViewGlobals} from "@envuso/core/Routing/Views/InjectViewGlobals";
import {StartSessionMiddleware} from "@envuso/core/Session/Middleware/StartSessionMiddleware";
import {SetInertiaSharedDataMiddleware} from "../App/Http/Middleware/SetInertiaSharedDataMiddleware";
import {BindRequestContextHook} from "@envuso/core/Server/InternalHooks/BindRequestContextHook";
import {ConvertEmptyStringsToNullHook} from "@envuso/core/Server/InternalHooks/ConvertEmptyStringsToNullHook";
import {InitiateRequestContextHook} from "@envuso/core/Server/InternalHooks/InitiateRequestContextHook";
import {ProcessUploadedFilesHook} from "@envuso/core/Server/InternalHooks/ProcessUploadedFilesHook";
import {SaveSessionHook} from "@envuso/core/Server/InternalHooks/SaveSessionHook";
import {SetResponseCookiesHook} from "@envuso/core/Server/InternalHooks/SetResponseCookiesHook";

export class ServerConfiguration extends ConfigurationCredentials implements ServerConfig {

	/**
	 * The port that fastify will listen on
	 */
	port = Environment.get<number>('PORT', 3000);

	/**
	 * The http address that fastify will listen on
	 */
	address = Environment.get<string>('ADDRESS', '127.0.0.1');

	/**
	 * Global middleware that will run on every application request
	 */
	middleware = [
		StartSessionMiddleware,
		InjectViewGlobals,
		SetInertiaSharedDataMiddleware,
	];

	/**
	 * We have a custom wrapper of fastify's server hooks
	 * This will allow us to extend fastify/framework logic a little
	 *
	 * Be warned, removing some of these may break some core logic handling of the server.
	 *
	 * @type {Array<HookTypes>}
	 */
	hooks = [
		BindRequestContextHook,
		InitiateRequestContextHook,
		ConvertEmptyStringsToNullHook,
		ProcessUploadedFilesHook,
		SetResponseCookiesHook,
		SaveSessionHook,
	];

	/**
	 * Any cookie names that you wish to not encrypt/decrypt
	 */
	disableCookieEncryption = [];

	/**
	 * Cors is automatically configured internally due to some framework
	 * configuration that needs to align. But you can also adjust the
	 * configuration you wish to use here.
	 */
	cors = {
		enabled : true,
		options : {
			origin      : (origin: string, callback) => {
				callback(null, true);
			},
			credentials : true,
		} as FastifyCorsOptions
	};

	/**
	 * Server providers are Fastify Plugins that you register to the server when it's booted.
	 */
	fastifyPlugins: Array<[FastifyPlugin, FastifyPluginOptions]> = [
		[FastifyMultipart, {} as FastifyMultipartOptions],
		[require('fastify-helmet'), {contentSecurityPolicy : false}]
	];

	/**
	 * Any options to pass to fastify when it boots
	 *
	 */
	fastifyOptions: FastifyServerOptions = {};

	/**
	 * Before we return a response we serialize the result, mainly
	 * so that class transformer can do it's work, but also to help
	 * with random errors that occur from circular references.
	 *
	 * excludeExtraneousValues can induce results that you might not
	 * expect but helps prevent internal references used in your code
	 * and the framework from being returned in a response.
	 */
	responseSerialization: ClassTransformOptions = {
		enableCircularCheck : true,
		strategy            : "exposeAll",
		//		excludeExtraneousValues : true,
	};

}
