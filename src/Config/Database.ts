import {MongoClientOptions} from "mongodb";
import {ClientOpts} from "redis";
import {Seeders} from "../Seeders/Seeders";
import {DatabaseSeeder} from "@envuso/core/Database";

export interface MongoConnectionConfiguration {
	name: string;
	url: string;
	clientOptions: MongoClientOptions;
}

export interface RedisConnectionConfiguration extends ClientOpts {
	enabled: boolean;
}

export interface DatabaseConfiguration {
	mongo: MongoConnectionConfiguration;
	redis: RedisConnectionConfiguration;
	seeder: new () => DatabaseSeeder
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
	},

	redis : {
		/**
		 * Set this to false to disable redis integration
		 */
		enabled : true,

		prefix : 'envuso-',
		//		db     : 'default',
		host : '127.0.0.1',
		port : 6379,
	},

	/**
	 * Your user defined seeder manager
	 * This is where you will register all of your seeder instances
	 * They will all be looped through and seeded.
	 */
	seeder : Seeders

} as DatabaseConfiguration;
