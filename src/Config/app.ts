export const app = {
	/**
	 * The hostname used for your application
	 */
	hostname : process.env.APP_HOST,
	/**
	 * The port fastify will use when serving
	 */
	port     : process.env.PORT,
	/**
	 * Used for encryption
	 */
	appKey   : process.env.APP_KEY,
};
