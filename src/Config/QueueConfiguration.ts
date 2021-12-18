import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import {ServiceProviderContract} from "@envuso/core/Contracts/AppContainer/ServiceProviderContract";
import {QueueConfiguration as QueueConfig} from "@envuso/core/Contracts/Configuration/QueueConfigurationContracts";
import {EncryptionServiceProvider} from "@envuso/core/Crypt";
import {DatabaseServiceProvider} from "@envuso/core/Database";
import {RedisServiceProvider} from "@envuso/core/Redis/RedisServiceProvider";
import {StorageServiceProvider} from "@envuso/core/Storage";

export default class QueueConfiguration extends ConfigurationCredentials implements QueueConfig {
	waitTimeMs = 1_000;

	/**
	 * Service providers to load into the container with your queue workers
	 *
	 * Without these defined/loaded, you won't have access to things
	 * like the database, file storage, redis, etc...
	 *
	 * @type {{new(): ServiceProviderContract}[]}
	 */
	providers: (new () => ServiceProviderContract)[] = [
		DatabaseServiceProvider,
		RedisServiceProvider,
		EncryptionServiceProvider,
		StorageServiceProvider,
	];
}
