import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    // 导入以下文件可以不用后缀名
    extensions:['.vue','.ts'],
    // 配置路径别名
    alias:{
      "@":path.resolve(__dirname,"src")
    }
  },
  server:{
    // 配置代理
    proxy:{
      "/api":{
        target:'http://localhost:3000',//设置代理目标
        changeOrigin:true,//是否改变请求源地址
        rewrite: (path) => path.replace(/^\/api/,''),//将/api 替换成空字符串
      }
    }
  },
})
