import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
// import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { join } from "path";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		vueJsx(),
		// VueSetupExtend(),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false, // css in js
				}),
			],
		}),
	],

	server: {
		// proxy: {
		// 	'192.168.10.2:8081': {
		// 		// target: 'http://110.40.167.169:10011',
		// 		// target: 'http://127.0.0.1:8081',
		// 		target: 'http://192.168.10.2:8081',
		// 		// 192.168.10.2
		// 		changeOrigin: true,
		// 		// rewrite: (path) => path.replace(/^\/api/, ''),
		// 	},
		// 	// '/file': {
		// 	// 	target: 'http://192.168.10.2:8099',
		// 	// 	// 192.168.10.2
		// 	// 	changeOrigin: true,
		// 	// 	rewrite: (path) => path.replace(/^\/file/, '/file'),
		// 	// }
		// }
		proxy: {
			'/api1': {
				target: 'http://192.168.10.2:8081',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api1/, ''),
			},
			'/api2': {
				target: 'http://192.168.10.2:8099',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api2/, ''),
			},
		},
	},

	resolve: {
		alias: {
			'@': join(__dirname, "src"),
			'views': join(__dirname, "src/views"),
		}
	},
	css: {
		// css预处理器
		preprocessorOptions: {
			less: {
				charset: false,
				// additionalData: '@import "./src/assets/style/global.less";',
			},
		},
	},

	optimizeDeps: {
		include: ['schart.js']
	},
	define: { __VUE_I18N_FULL_INSTALL__: true, __VUE_I18N_LEGACY_API__: true, __INTLIFY_PROD_DEVTOOLS__: false },
});
