import {createApp, h}     from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3';

createInertiaApp({
	id: 'app',
	resolve : name => require(`./Pages/${name}.vue`),
	setup({el, app, props, plugin})
	{
		createApp({render : () => h(app, props)})
			.use(plugin)
			.mount(el);
	},
});

