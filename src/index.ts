import "reflect-metadata";
import Environment from "@envuso/core/AppContainer/Config/Environment";
import path from "path";

Environment.load(path.join(__dirname, '..', '.env'));

import Configuration from "./Config/Configuration";
import {Envuso} from "@envuso/core";
import {Log} from "@envuso/core/Common";

const envuso = new Envuso();

Configuration.initiate()
	.then(() => envuso.boot())
	.then(() => envuso.serve())
	.catch(error => {
		Log.error(error);
		console.trace(error);
	});

