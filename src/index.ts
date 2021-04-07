import {whenBootstrapped} from "@Core/Bootstrap";
import {App} from "@Core/App";
import Container from "@Core/Container";
import {ServerServiceProvider} from "@Core/Providers";

//@ts-ignore
global.disableConsoleLogs = false;

const app = new App();

export async function bootApp() {
	app.registerProviders();
	await app.registerProviderBindings();
	await app.bootProviders();
	await app.up();
}

export function destroyApp() {
	app.down();
}

whenBootstrapped().then(async () => {
	await bootApp();

	await Container.get<ServerServiceProvider>(ServerServiceProvider).run();
});

