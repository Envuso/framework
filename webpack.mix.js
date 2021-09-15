const mix = require('laravel-mix');

mix
	.setPublicPath('assets')
	.vue({version : 3})
	.ts('src/Resources/Ts/app.ts', 'assets/app.js')
	.postCss("src/Resources/Styles/app.css", "assets/app.css", [
		require("tailwindcss"),
	])
	.disableNotifications()
;
