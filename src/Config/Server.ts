import {ClassTransformOptions} from "class-transformer/types/interfaces";
import {FastifyPlugin, FastifyPluginOptions, FastifyServerOptions} from "fastify";
import {default as FastifyMultipart, FastifyMultipartOptions} from "fastify-multipart";

export default {

	/**
	 * The port that fastify will listen on
	 */
	port : process.env.PORT ?? 3000,

	/**
	 * Server providers are Fastify Plugins that you register to the server when it's booted.
	 */
	fastifyPlugins : [
		[
			FastifyMultipart,
			{} as FastifyMultipartOptions
		],
		[require('fastify-cors')],
		[require('fastify-helmet'), {contentSecurityPolicy : false}]
	] as Array<[FastifyPlugin, FastifyPluginOptions]>,

	/**
	 * Any options to pass to fastify when it boots
	 *
	 */
	fastifyOptions : {} as FastifyServerOptions,

	/**
	 * Before we return a response we serialize the result, mainly
	 * so that class transformer can do it's work, but also to help
	 * with random errors that occur from circular references.
	 *
	 * excludeExtraneousValues can induce results that you might not
	 * expect but helps prevent internal references used in your code
	 * and the framework from being returned in a response.
	 *
	 * Disable at your own will.
	 */
	responseSerialization : {
		enableCircularCheck : true,
		//		excludeExtraneousValues : true,
		//		excludePrefixes : ['_'],
		strategy : "exposeAll"
	} as ClassTransformOptions
};
