import * as path from "path";
import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";


export class FilesystemPathsConfiguration extends ConfigurationCredentials {
	public root: string             = process.cwd();
	public src: string              = path.join(this.root, 'src');
	public controllers: string      = path.join(this.root, 'src', 'App', 'Http', 'Controllers');
	public middleware: string       = path.join(this.root, 'src', 'App', 'Http', 'Middleware');
	public socketListeners: string  = path.join(this.root, 'src', 'App', 'Http', 'Sockets');
	public eventDispatchers: string = path.join(this.root, 'src', 'App', 'Events', 'Dispatchers');
	public eventListeners: string   = path.join(this.root, 'src', 'App', 'Events', 'Listeners');
	public providers: string        = path.join(this.root, 'src', 'App', 'Providers');
	public models: string           = path.join(this.root, 'src', 'App', 'Models');
	public policies: string         = path.join(this.root, 'src', 'Policies');
	public storage: string          = path.join(this.root, 'storage');
	public temp: string             = path.join(this.root, 'storage', 'temp');
	public views: string            = path.join(this.root, 'src', 'Resources', 'Views');
	public assets: string           = path.join(this.root, 'src', 'Resources', 'Assets');

}

