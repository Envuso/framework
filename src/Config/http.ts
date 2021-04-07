import {ClassTransformOptions} from "class-transformer/types/interfaces";

export const http = {

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
		excludePrefixes : ['_'],
		strategy        : "exposeAll"
	} as ClassTransformOptions

}
