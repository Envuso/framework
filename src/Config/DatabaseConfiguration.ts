import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import Environment from "@envuso/core/AppContainer/Config/Environment";
import {
	DatabaseConfiguration as DbConfig,
	MongoConnectionConfiguration,
} from '@envuso/core/Contracts/Configuration/DatabaseConfigurationContracts';

export class DatabaseConfiguration extends ConfigurationCredentials implements DbConfig {

	mongo: MongoConnectionConfiguration = {
		name          : Environment.get<string>('DB_NAME', 'envuso'),
		url           : Environment.get<string>('DB_URL', 'mongodb://127.0.0.1:27017'),
		clientOptions : {
			ssl                : true,
			readPreference     : "primaryPreferred",
		}
	};

	/**
	 * Your user defined seeder manager
	 * This is where you will register all of your seeder instances
	 * They will all be looped through and seeded.
	 */
	//	seeder = Seeders;
	seeder = null;
}
