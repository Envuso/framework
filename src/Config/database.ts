export const database = {
	/**
	 * Connection information for your mongodb database
	 */
	mongo : {
		connectionUrl : process.env.MONGODB_CONNECTION_URL
	},
	/**
	 * Redis connection information
	 */
	redis : {
		host : process.env.REDIS_HOST,
		port : Number(process.env.REDIS_PORT)
	}
};

