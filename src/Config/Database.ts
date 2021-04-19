import {MongoClientOptions} from "mongodb";
import {Logger} from "node-cache-redis/dist/src/helpers";
import {ClientOpts as RedisOptions} from "redis";
import {Options as PoolOptions} from 'generic-pool';

export interface RedisDatabaseConfiguration {
	name?: string | undefined;
	redisOptions: RedisOptions;
	poolOptions?: PoolOptions | undefined;
	logger?: Logger | undefined;
	defaultTtlInS?: number | undefined;
}

export interface MongoConnectionConfiguration {
	name: string;
	url: string;
	clientOptions: MongoClientOptions;
}

export default {

	mongo : {
		name          : 'test',
		url           : 'mongodb://127.0.0.1:27017',
		clientOptions : {
			ssl                : false,
			readPreference     : "primaryPreferred",
			useNewUrlParser    : true,
			useUnifiedTopology : true
		}
	} as MongoConnectionConfiguration,

	redis : {
		name : 'default',

	} as RedisDatabaseConfiguration

}
