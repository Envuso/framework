import {http} from "./http";
import {app} from "./app";
import {auth} from "./auth";
import {database} from "./database";
import {providers, serverProviders} from "./providers";
import {storage} from "./storage";
import {ConfigInterface} from '@Core/../Config';

export const Config: ConfigInterface = {
	app,
	database,
	providers,
	serverProviders,
	storage,
	auth,
	http,
}


