import {AuthenticationServiceProvider} from "@envuso/core/Authentication";
import {CacheServiceProvider, EncryptionServiceProvider, ServerServiceProvider} from "@envuso/core/Core";
import {DatabaseServiceProvider} from "@envuso/core/Database";
import {RouteServiceProvider} from "@envuso/core/Routing";
import {StorageServiceProvider} from "@envuso/core/Storage";


export default {

	appKey : 'sfhsjkfhksjhdfkjshdj',//process.env.APP_KEY,

	providers : [
		CacheServiceProvider,
		EncryptionServiceProvider,
		DatabaseServiceProvider,
		StorageServiceProvider,
		AuthenticationServiceProvider,
		RouteServiceProvider,
		ServerServiceProvider
	],

}
