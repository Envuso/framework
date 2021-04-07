import {SpacesProvider} from "@Providers/Storage/StorageProviders/SpacesProvider";

export const storage = {

	defaultProvider : SpacesProvider,

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
