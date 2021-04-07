import {EncryptionServiceProvider} from "@Providers/Crypt/EncryptionServiceProvider";
import {ServerServiceProvider} from "@Providers/Http/Server/ServerServiceProvider";
import {LogServiceProvider} from "@Providers/Log/LogServiceProvider";
import {ModelServiceProvider} from "@Providers/Model/ModelServiceProvider";
import {CacheServiceProvider} from "@Providers/Cache/CacheServiceProvider";
import {ControllerServiceProvider} from "@Providers/Http/Controller/ControllerServiceProvider";
import {AuthServiceProvider} from "@Providers/Auth/AuthServiceProvider";
import {StorageServiceProvider} from "@Providers/Storage/StorageServiceProvider";
import {FastifyPlugin, FastifyPluginOptions, FastifyRegister} from "fastify";

import {default as FastifyMultipart, FastifyMultipartOptions} from "fastify-multipart";

/**
 * These are our service providers, they are the
 * core functionality of the framework.
 *
 * You can remove a provider and replace it with your
 * own, or completely disable some functionality.
 */
export const providers = [

	EncryptionServiceProvider,
	LogServiceProvider,
	CacheServiceProvider,
	StorageServiceProvider,
	ModelServiceProvider,
	AuthServiceProvider,
	ControllerServiceProvider,
	ServerServiceProvider,

];

/**
 * Server providers are Fastify Plugins that you register to the server when it's booted.
 */
export const serverProviders: Array<[FastifyPlugin, FastifyPluginOptions]> = [
	[
		FastifyMultipart,
		{} as FastifyMultipartOptions
	]
]
