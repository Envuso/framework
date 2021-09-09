import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import Environment from "@envuso/core/AppContainer/Config/Environment";
import {
	DatabaseConfiguration as DbConfig,
	MongoConnectionConfiguration,
	RedisConnectionConfiguration
} from '@envuso/core/Contracts/Configuration/DatabaseConfigurationContracts';

export class DatabaseConfiguration extends ConfigurationCredentials implements DbConfig {

	mongo: MongoConnectionConfiguration = {
		name          : Environment.get<string>('DB_NAME', 'envuso'),
		url           : Environment.get<string>('DB_URL', 'mongodb://127.0.0.1:27017'),
		clientOptions : {
			ssl                : false,
			readPreference     : "primaryPreferred",
			useNewUrlParser    : true,
			useUnifiedTopology : true
		}
	};

	redis: RedisConnectionConfiguration = {
		/**
		 * Set this to false to disable redis integration
		 */
		enabled : true,

		prefix : 'envuso-',
		host   : '127.0.0.1',
		port   : 6379,
	};

	/**
	 * Your user defined seeder manager
	 * This is where you will register all of your seeder instances
	 * They will all be looped through and seeded.
	 */
	//	seeder = Seeders;
	seeder = null;
}
