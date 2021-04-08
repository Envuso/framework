import {SpacesProvider} from "@Providers/Storage/StorageProviders/SpacesProvider";

export const storage = {

	/**
	 * The default storage provider to use on the request() helper
	 * or when using Storage.get(), Storage.put() etc
	 */
	defaultProvider : SpacesProvider,

	/**
	 * Your DigitalOcean spaces information
	 */
	spaces : {
		bucket      : process.env.SPACES_BUCKET,
		url         : process.env.SPACES_URL,
		endpoint    : process.env.SPACES_ENDPOINT,
		credentials : {
			accessKeyId     : process.env.SPACES_KEY,
			secretAccessKey : process.env.SPACES_SECRET,
		}
	}
}
