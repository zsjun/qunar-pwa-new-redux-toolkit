import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import px2vw from '@yuo/postcss-px2vw';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // css模块化，文件以.module.[css|less|scss]结尾，否则不生效的
    modules: {
      /**
       * 配置 CSS modules 的行为。选项将被传递给 postcss-modules。
       * 默认：'camelCaseOnly'。
       * 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly'
       * */
      localsConvention: 'dashesOnly',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  server: {
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    open: true,
    port: 3000,
    host: '0.0.0.0',
  },
});
