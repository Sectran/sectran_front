import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
// import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { join } from "path";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
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
			proxy: {
				[env.VITE_PROXY_BASE_URL]: {
					target: env.VITE_API_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(new RegExp(`^${env.VITE_PROXY_BASE_URL}`), ''),
				},
				[env.VITE_PROXY_BASE_File]: {
					target: env.VITE_Chard_FILE,  
					changeOrigin: true,
					rewrite: (path) => path.replace(new RegExp(`^${env.VITE_PROXY_BASE_File}`), ''),
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
	};
});




