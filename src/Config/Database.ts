import {MongoClientOptions} from "mongodb";
import {ClientOpts} from "redis";

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
		prefix : 'envuso-',
		//		db     : 'default',
		host   : '127.0.0.1',
		port   : 6379,
	} as ClientOpts
}
