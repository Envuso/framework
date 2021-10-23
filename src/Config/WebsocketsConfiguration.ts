import {ServerOptions} from "ws";
import {AppOptions, CompressOptions, SHARED_COMPRESSOR} from "uWebSockets.js";
import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import {MiddlewareContract} from "@envuso/core/Contracts/Routing/Middleware/MiddlewareContract";

export type uWsBehaviour = {
	/** Maximum length of received message. If a client tries to send you a message larger than this, the connection is immediately closed. Defaults to 16 * 1024. */
	maxPayloadLength?: number;
	/** Maximum amount of seconds that may pass without sending or getting a message. Connection is closed if this timeout passes. Resolution (granularity) for timeouts are typically 4 seconds, rounded to closest.
	 * Disable by using 0. Defaults to 120.
	 */
	idleTimeout?: number;
	/** What permessage-deflate compression to use. uWS.DISABLED, uWS.SHARED_COMPRESSOR or any of the uWS.DEDICATED_COMPRESSOR_xxxKB. Defaults to uWS.DISABLED. */
	compression?: CompressOptions;
	/** Maximum length of allowed backpressure per socket when publishing or sending messages. Slow receivers with too high backpressure will be skipped until they catch up or timeout. Defaults to 1024 * 1024. */
	maxBackpressure?: number;
}

export default class WebsocketsConfiguration extends ConfigurationCredentials {

	port: number = 3335;

	/**
	 * Disable the websocket implementation
	 * @deprecated You can just disable the WebSocketServiceProvider in AppConfiguration.ts
	 */
	enabled: boolean = true;

	middleware: (new () => MiddlewareContract)[] = [
		// JwtAuthenticationMiddleware
		// AuthenticatedMiddleware,
	];

	options: ServerOptions = {
		clientTracking : false
	};

	uWebsocketAppOptions: AppOptions = {};

	uWebsocketServerBehaviour: uWsBehaviour = {
		/** Maximum length of received message. If a client tries to send you a message larger than this, the connection is immediately closed. Defaults to 16 * 1024. */
		maxPayloadLength : 16 * 1024 * 1024,
		/** Maximum amount of seconds that may pass without sending or getting a message. Connection is closed if this timeout passes. Resolution (granularity) for timeouts are typically 4 seconds, rounded to closest.
		 * Disable by using 0. Defaults to 120.
		 */
		idleTimeout : 32,
		/** What permessage-deflate compression to use. uWS.DISABLED, uWS.SHARED_COMPRESSOR or any of the uWS.DEDICATED_COMPRESSOR_xxxKB. Defaults to uWS.DISABLED. */
		compression : SHARED_COMPRESSOR,
		/** Maximum length of allowed backpressure per socket when publishing or sending messages. Slow receivers with too high backpressure will be skipped until they catch up or timeout. Defaults to 1024 * 1024. */
		maxBackpressure : null
	};

}

