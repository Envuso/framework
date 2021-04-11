import {S3Provider, StorageProviderContract} from "@envuso/storage";


export type S3Config = {
	bucket: string;
	url: string;
	endpoint: string;
	credentials: {
		accessKeyId: string;
		secretAccessKey: string;
	}
}

export interface StorageConfig {
	defaultProvider: new (storageConfig: StorageConfig) => StorageProviderContract;
	s3: S3Config;
}

export default {

	/**
	 * The default storage provider to use on the request() helper
	 * or when using Storage.get(), Storage.put() etc
	 */
	defaultProvider : S3Provider,

	/**
	 * Your S3 config
	 * (Should hopefully work for other services like DigitalOcean Spaces also)
	 */
	s3 : {
		bucket      : process.env.SPACES_BUCKET,
		url         : process.env.SPACES_URL,
		endpoint    : process.env.SPACES_ENDPOINT,
		credentials : {
			accessKeyId     : process.env.SPACES_KEY,
			secretAccessKey : process.env.SPACES_SECRET,
		}
	} as S3Config,


};
