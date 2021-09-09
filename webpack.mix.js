const mix = require('laravel-mix');

mix
	.setPublicPath('assets')
	.vue({version : 3})
	.js('src/Resources/js/app.js', 'assets/app.js');
