import {LocalFileProvider, LocalStorageProviderConfiguration, S3Provider, S3StorageProviderConfiguration, StorageProviderContract} from "@envuso/core/Storage";
import path from "path";

export type DriverTypes = {
	local: LocalStorageProviderConfiguration & { driver: 'local' },
	s3: S3StorageProviderConfiguration & { driver: 's3' },
};

export type DiskConfiguration<T extends keyof DriverTypes> = DriverTypes[T]

export type DisksList = {
	[key: string]: (DiskConfiguration<'local'> | DiskConfiguration<'s3'>)
}

export interface StorageConfiguration {
	defaultDisk: keyof DisksList;
	disks: DisksList;
	drivers: {
		[K in keyof DriverTypes]: new (storageConfig: DiskConfiguration<K>) => StorageProviderContract;
	};
}

export default {

	/**
	 * The default storage provider to use on the request() helper
	 * or when using Storage.get(), Storage.put() etc
	 */
	defaultDisk : 'local',

	disks : {
		s3      : {
			driver      : 's3',
			bucket      : process.env.SPACES_BUCKET,
			url         : process.env.SPACES_URL,
			endpoint    : process.env.SPACES_ENDPOINT,
			credentials : {
				accessKeyId     : process.env.SPACES_KEY,
				secretAccessKey : process.env.SPACES_SECRET,
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
	},

	drivers : {
		local : LocalFileProvider,
		s3    : S3Provider,
	}

} as StorageConfiguration;
