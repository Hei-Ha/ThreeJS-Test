import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'path';


export default defineConfig({
    plugins: [vue()],
    css: {
        postcss: [
            tailwindcss,
            autoprefixer,
        ]
    },
    resolve: {
        alias: {
            "@3DModules": path.resolve(__dirname, './public/3DModels'),
            "@src": path.resolve(__dirname, 'src'),
        }
    }
})
