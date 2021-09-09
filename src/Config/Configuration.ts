import ConfigurationFile from "@envuso/core/AppContainer/Config/ConfigurationFile";

export default class Configuration extends ConfigurationFile {

	load() {
		this.add('app', import("./AppConfiguration"));
		this.add('auth', import("./AuthConfiguration"));
		this.add('database', import("./DatabaseConfiguration"));
		this.add('paths', import("./FilesystemPathsConfiguration"));
		this.add('serialization', import("./SerializationConfiguration"));
		this.add('server', import("./ServerConfiguration"));
		this.add('services', import("./ServicesConfiguration"));
		this.add('session', import("./SessionConfiguration"));
		this.add('storage', import("./StorageConfiguration"));
		this.add('websockets', import("./WebsocketsConfiguration"));
		this.add('inertia', import("./InertiaConfiguration"));
		this.add('static', import("./StaticAssetConfiguration"));
	}

}
