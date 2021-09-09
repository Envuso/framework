import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import {DateTime} from "@envuso/core/Common";
import {CookieConfiguration, SessionConfiguration as SessionConfig, SessionCookie} from "@envuso/core/Contracts/Session/Types";
import {FileSessionDriver} from "@envuso/core/Session/Drivers/FileSessionDriver";
import {SessionStorageDriver} from "@envuso/core/Session/Drivers/SessionStorageDriver";


export class SessionConfiguration extends ConfigurationCredentials implements SessionConfig {

	/**
	 * All cookies are stored by default with this configuration
	 */
	cookie: CookieConfiguration = {
		path      : '/',
		httpOnly  : true,
		secure    : false,
		expires   : DateTime.now().addDays(7),
		maxAge    : DateTime.now().addDays(7),
		sameSite  : "Lax",
		encrypted : true,
		// domain   : null,
	};

	/**
	 * The driver used to handle session data
	 *
	 * Available drivers are:
	 *   - RedisSessionDriver
	 *      - Import: ../Session/Drivers/RedisSessionDriver
	 *   - FileSessionDriver
	 *      - Import: ../Session/Drivers/FileSessionDriver
	 */
	sessionStorageDriver: new () => SessionStorageDriver | null = FileSessionDriver;
	// sessionStorageDriver: new () => SessionStorageDriver | null = RedisSessionDriver;

	/**
	 * Configuration for session cookies
	 * These settings affect how SessionAuthenticationProvider works.
	 */
	sessionCookie: SessionCookie = {
		name : 'sessionId',
	};

}
