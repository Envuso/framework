import * as path from "path";
import {ConfigurationCredentials} from "@envuso/core/AppContainer";

export default class StaticAssetConfiguration extends ConfigurationCredentials {
	public assetsPath: string = path.join(process.cwd(), 'assets');
}
