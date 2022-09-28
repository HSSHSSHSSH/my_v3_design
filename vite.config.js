import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
    include: [/\.vue$/, /\.md$/],
  }),
  Markdown(),
],
  rollupOptions: {  //解决isCe报错
    external: ["vue"],  //打包时不计入
    output: {
      globals: {
        vue: "Vue"
      }
    }
  },
  build: {   //配置打包时的信息
    lib: {
      entry: './lib/index.js',  //入口文件
      name: 'test-hui'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./lib/assets/styles/style.scss" as *;`   //配置全局scss选项
      }
    }
  },
  resolve: {
    alias: {
      '@':resolve(__dirname,'src')
    }
  }
})
