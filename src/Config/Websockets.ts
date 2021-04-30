import {JwtAuthenticationMiddleware} from "@envuso/core/Routing";
import {ServerOptions} from "ws";

export default {

	/**
	 * Disable the websocket implementation
	 */
	enabled : true,

	/**
	 * Use middleware to prevent access to the websocket connection
	 */
	middleware : [
		JwtAuthenticationMiddleware
	],

	/**
	 * cors configuration for the socket server
	 *
	 * Currently not implemented
	 */
	cors : {
		enabled : true,
	},

	options : {
		clientTracking : false
	} as ServerOptions

};
