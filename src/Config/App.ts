import {AuthenticationServiceProvider} from "@envuso/authentication";
import {CacheServiceProvider, EncryptionServiceProvider, ServerServiceProvider} from "@envuso/core";
import {DatabaseServiceProvider} from "@envuso/database";
import {RouteServiceProvider} from "@envuso/routing";
import {StorageServiceProvider} from "@envuso/storage";


export default {

	appKey : 'sfhsjkfhksjhdfkjshdj',//process.env.APP_KEY,

	providers : [
		CacheServiceProvider,
		EncryptionServiceProvider,
		DatabaseServiceProvider,
		StorageServiceProvider,
		RouteServiceProvider,
		AuthenticationServiceProvider,
		ServerServiceProvider
	],

}
