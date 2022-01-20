import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import Environment from "@envuso/core/AppContainer/Config/Environment";
import {ApplicationConfiguration} from "@envuso/core/Contracts/AppContainer/AppContract";
import {
	EncryptionServiceProvider,
	AuthenticationServiceProvider,
	RouteServiceProvider,
	StorageServiceProvider,
	DatabaseServiceProvider,
	ServerServiceProvider,
	SecurityServiceProvider,
	SessionServiceProvider,
	EventServiceProvider,
	AuthorizationServiceProvider,
	WebSocketsServiceProvider,
} from "@envuso/core";
import {ServiceProviderContract} from "@envuso/core/Contracts/AppContainer/ServiceProviderContract";
import {ExceptionHandlerConstructorContract} from "@envuso/core/Contracts/Common/Exception/ExceptionHandlerContract";
import {InertiaServiceProvider} from "@envuso/core/Packages/Inertia/InertiaServiceProvider";
import {RedisServiceProvider} from "@envuso/core/Redis/RedisServiceProvider";
import {ExceptionHandler} from "../App/Exceptions/ExceptionHandler";


export class AppConfiguration extends ConfigurationCredentials implements ApplicationConfiguration {

	environment: string = Environment.get('NODE_ENV');

	appKey = Environment.get<string>('APP_KEY');

	url: string = Environment.get('APP_URL', 'http://127.0.0.1:' + Environment.get<number>('PORT', 3000));

	providers: (new () => ServiceProviderContract)[] = [
		SecurityServiceProvider,
		SessionServiceProvider,
		EventServiceProvider,
//		RedisServiceProvider,
		DatabaseServiceProvider,
		EncryptionServiceProvider,
		AuthenticationServiceProvider,
		AuthorizationServiceProvider,
		RouteServiceProvider,
		StorageServiceProvider,
		ServerServiceProvider,
		InertiaServiceProvider,
		WebSocketsServiceProvider
	];

	exceptionHandler: ExceptionHandlerConstructorContract = ExceptionHandler;

	logging = {
		middleware     : false,
		routes         : false,
		controllers    : false,
		providers      : false,
		serverHooks    : false,
		socketChannels : false,
	};

	isDev() {
		return this.environment === 'development';
	}

	isProd() {
		return this.environment === 'production';
	}

}
