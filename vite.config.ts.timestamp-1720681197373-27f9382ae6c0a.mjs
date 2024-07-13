// vite.config.ts
import { defineConfig } from "file:///D:/%E6%9C%AC%E5%9C%B0%E9%A1%B9%E7%9B%AE/xx/sectran_front/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E6%9C%AC%E5%9C%B0%E9%A1%B9%E7%9B%AE/xx/sectran_front/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/%E6%9C%AC%E5%9C%B0%E9%A1%B9%E7%9B%AE/xx/sectran_front/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { join } from "path";
import Components from "file:///D:/%E6%9C%AC%E5%9C%B0%E9%A1%B9%E7%9B%AE/xx/sectran_front/node_modules/unplugin-vue-components/dist/vite.mjs";
import { AntDesignVueResolver } from "file:///D:/%E6%9C%AC%E5%9C%B0%E9%A1%B9%E7%9B%AE/xx/sectran_front/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "D:\\\u672C\u5730\u9879\u76EE\\xx\\sectran_front";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    vue(),
    vueJsx(),
    // VueSetupExtend(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
          // css in js
        })
      ]
    })
  ],
  server: {
    proxy: {
      "/api": {
        // target: 'http://110.40.167.169:10011',
        target: "http://127.0.0.1:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": join(__vite_injected_original_dirname, "src"),
      "views": join(__vite_injected_original_dirname, "src/views")
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false
        // additionalData: '@import "./src/assets/style/global.less";',
      }
    }
  },
  optimizeDeps: {
    include: ["schart.js"]
  },
  define: { __VUE_I18N_FULL_INSTALL__: true, __VUE_I18N_LEGACY_API__: true, __INTLIFY_PROD_DEVTOOLS__: false }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTY3MkNcdTU3MzBcdTk4NzlcdTc2RUVcXFxceHhcXFxcc2VjdHJhbl9mcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU2NzJDXHU1NzMwXHU5ODc5XHU3NkVFXFxcXHh4XFxcXHNlY3RyYW5fZnJvbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNiU5QyVBQyVFNSU5QyVCMCVFOSVBMSVCOSVFNyU5QiVBRS94eC9zZWN0cmFuX2Zyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xyXG4vLyBpbXBvcnQgVnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcclxuaW1wb3J0IHsgQW50RGVzaWduVnVlUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cdGJhc2U6ICcuLycsXHJcblx0cGx1Z2luczogW1xyXG5cdFx0dnVlKCksXHJcblx0XHR2dWVKc3goKSxcclxuXHRcdC8vIFZ1ZVNldHVwRXh0ZW5kKCksXHJcblx0XHRDb21wb25lbnRzKHtcclxuXHRcdFx0cmVzb2x2ZXJzOiBbXHJcblx0XHRcdFx0QW50RGVzaWduVnVlUmVzb2x2ZXIoe1xyXG5cdFx0XHRcdFx0aW1wb3J0U3R5bGU6IGZhbHNlLCAvLyBjc3MgaW4ganNcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XSxcclxuXHRcdH0pLFxyXG5cdF0sXHJcblxyXG5cdHNlcnZlcjoge1xyXG5cdFx0cHJveHk6IHtcclxuXHRcdFx0Jy9hcGknOiB7XHJcblx0XHRcdFx0Ly8gdGFyZ2V0OiAnaHR0cDovLzExMC40MC4xNjcuMTY5OjEwMDExJyxcclxuXHRcdFx0XHR0YXJnZXQ6ICdodHRwOi8vMTI3LjAuMC4xOjgwODEnLFxyXG5cdFx0XHRcdGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuXHRcdFx0XHRyZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0YWxpYXM6IHtcclxuXHRcdFx0J0AnOiBqb2luKF9fZGlybmFtZSwgXCJzcmNcIiksXHJcblx0XHRcdCd2aWV3cyc6IGpvaW4oX19kaXJuYW1lLCBcInNyYy92aWV3c1wiKSxcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNzczoge1xyXG5cdFx0Ly8gY3NzXHU5ODg0XHU1OTA0XHU3NDA2XHU1NjY4XHJcblx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcblx0XHRcdGxlc3M6IHtcclxuXHRcdFx0XHRjaGFyc2V0OiBmYWxzZSxcclxuXHRcdFx0XHQvLyBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCIuL3NyYy9hc3NldHMvc3R5bGUvZ2xvYmFsLmxlc3NcIjsnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHRvcHRpbWl6ZURlcHM6IHtcclxuXHRcdGluY2x1ZGU6IFsnc2NoYXJ0LmpzJ11cclxuXHR9LFxyXG5cdGRlZmluZTogeyBfX1ZVRV9JMThOX0ZVTExfSU5TVEFMTF9fOiB0cnVlLCBfX1ZVRV9JMThOX0xFR0FDWV9BUElfXzogdHJ1ZSwgX19JTlRMSUZZX1BST0RfREVWVE9PTFNfXzogZmFsc2UgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1MsU0FBUyxvQkFBb0I7QUFDL1QsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUVuQixTQUFTLFlBQVk7QUFDckIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyw0QkFBNEI7QUFOckMsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1IsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBO0FBQUEsSUFFUCxXQUFXO0FBQUEsTUFDVixXQUFXO0FBQUEsUUFDVixxQkFBcUI7QUFBQSxVQUNwQixhQUFhO0FBQUE7QUFBQSxRQUNkLENBQUM7QUFBQSxNQUNGO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ04sUUFBUTtBQUFBO0FBQUEsUUFFUCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsTUFDN0M7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSyxLQUFLLGtDQUFXLEtBQUs7QUFBQSxNQUMxQixTQUFTLEtBQUssa0NBQVcsV0FBVztBQUFBLElBQ3JDO0FBQUEsRUFDRDtBQUFBLEVBQ0EsS0FBSztBQUFBO0FBQUEsSUFFSixxQkFBcUI7QUFBQSxNQUNwQixNQUFNO0FBQUEsUUFDTCxTQUFTO0FBQUE7QUFBQSxNQUVWO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUVBLGNBQWM7QUFBQSxJQUNiLFNBQVMsQ0FBQyxXQUFXO0FBQUEsRUFDdEI7QUFBQSxFQUNBLFFBQVEsRUFBRSwyQkFBMkIsTUFBTSx5QkFBeUIsTUFBTSwyQkFBMkIsTUFBTTtBQUM1RyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
