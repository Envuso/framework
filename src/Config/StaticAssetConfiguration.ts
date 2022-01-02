import {ConfigurationCredentials} from "@envuso/core/AppContainer";
import {WatchOptions} from "chokidar";

export default class StaticAssetConfiguration extends ConfigurationCredentials {

	/**
	 * This is the raw folder name in your application root directory
	 *
	 * For example, if we have our project at /EnvusoProject
	 * Our asset's directory is registered as /EnvusoProject/assets
	 *
	 * @type {string}
	 */
	public assetsPath: string = 'assets';

	/**
	 * Essentially, by setting this to true, when our assets registered in our above asset's path
	 * the server will be re-booted automatically.
	 *
	 * without this, the server won't have your routes/asset's registered if you were to
	 * (for example) boot the server, then build your frontend asset's.
	 *
	 * By default, this is disabled so that you don't consume extra RAM in development
	 * It will also be disabled in production(you shouldn't be using this in production)
	 *
	 *
	 * @type {boolean}
	 */
	public watch: boolean = false;

	/**
	 * When the above "watch" option is set to true, we can define any options here which will be passed to chokidar
	 *
	 * @type {WatchOptions}
	 */
	public watchOptions: WatchOptions = {
		ignoreInitial : true,
	};
}
