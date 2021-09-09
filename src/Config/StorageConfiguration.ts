import Environment from "@envuso/core/AppContainer/Config/Environment";
import path from "path";
import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import {DisksList, DriversList, LocalFileProvider} from "@envuso/core/Storage";
import {S3Provider} from "@envuso/core/Storage";
import {StorageConfiguration as StorageConfig} from '@envuso/core/Storage/StorageProviderContract';

export class StorageConfiguration extends ConfigurationCredentials implements StorageConfig {

	/**
	 * The default storage provider to use on the request() helper
	 * or when using Storage.get(), Storage.put() etc
	 */
	defaultDisk: keyof DisksList = 'local';

	disks: DisksList = {
		s3      : {
			driver      : 's3',
			bucket      : Environment.get('SPACES_BUCKET'),
			url         : Environment.get('SPACES_URL'),
			endpoint    : Environment.get('SPACES_ENDPOINT'),
			credentials : {
				accessKeyId     : Environment.get('SPACES_KEY'),
				secretAccessKey : Environment.get('SPACES_SECRET'),
			}
		},
		temp    : {
			driver : 'local',
			root   : path.join(process.cwd(), 'storage', 'temp'),
		},
		local   : {
			driver : 'local',
			root   : path.join(process.cwd(), 'storage', 'local'),
		},
		storage : {
			driver : 'local',
			root   : path.join(process.cwd(), 'storage'),
		},
	};

	drivers: DriversList = {
		local : LocalFileProvider,
		s3    : S3Provider,
	};

}
