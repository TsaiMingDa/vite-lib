// vite.config.js
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/index.js'),
        name: 'MyLib',
        // the proper extensions will be added
        fileName: 'my-lib',
        formats:['es']
      },
      rollupOptions: {
        output: {
          assetFileNames: `lib-${env.LIBRARY_VERSION}-min[extname]`
        }
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ["last 4 versions"]
          })
        ]
      }
    },
  }
})