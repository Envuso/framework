import {
	EncryptionServiceProvider,
	AuthenticationServiceProvider,
	RouteServiceProvider,
	StorageServiceProvider,
	CacheServiceProvider,
	DatabaseServiceProvider,
	ServerServiceProvider,
} from "@envuso/core";


export default {

	appKey : 'sfhsjkfhksjhdfkjshdj',//process.env.APP_KEY,

	providers : [
		DatabaseServiceProvider,
		CacheServiceProvider,
		EncryptionServiceProvider,
		AuthenticationServiceProvider,
		RouteServiceProvider,
		StorageServiceProvider,
		ServerServiceProvider,
	],

};
