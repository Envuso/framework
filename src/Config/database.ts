export const database = {
	mongo : {
		connectionUrl : process.env.MONGODB_CONNECTION_URL
	},
	redis : {
		host : process.env.REDIS_HOST,
		port : Number(process.env.REDIS_PORT)
	}
};

