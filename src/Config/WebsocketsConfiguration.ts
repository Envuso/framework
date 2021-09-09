import {ServerOptions} from "ws";
import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import {MiddlewareContract} from "@envuso/core/Contracts/Routing/Middleware/MiddlewareContract";
import {JwtAuthenticationMiddleware} from "@envuso/core/Routing/Middleware/Middlewares/JwtAuthenticationMiddleware";

export class WebsocketsConfiguration extends ConfigurationCredentials {

	/**
	 * Disable the websocket implementation
	 */
	enabled: boolean = true;

	middleware: (new () => MiddlewareContract)[] = [
		JwtAuthenticationMiddleware
	];

	/**
	 * cors configuration for the socket server
	 */
	cors = {
		enabled : true,
		// Not yet implemented... sorry
		//		options : {
		//			origin      : (origin: string, callback) => {
		//				callback(null, true);
		//			},
		//			credentials : true,
		//		}
	};

	options: ServerOptions = {
		clientTracking : false
	};

}
