//import "@Core/Bootstrap";
//import {App} from "@envuso/core/src/Core";
//
//
////@ts-ignore
//global.disableConsoleLogs = false;
//
//const app = new App();
//
//beforeAll(() => {
//	return async function prepare() {
//		app.registerProviders();
//		await app.registerProviderBindings();
//		await app.bootProviders();
//	}
//});
//
//afterAll(() => {
//	return async function unPrepare() {
//		app.down();
//	}
//})
//
//
//describe('some test group', () => {
//	test('it is true', async () => {
//		expect(true).toBeTruthy();
//	});
//})
//
//
//
