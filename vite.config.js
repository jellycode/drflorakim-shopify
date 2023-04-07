import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode, ssrBuild }) => ({
 define: { 'process.env': {} },
 build: {
  outDir: 'assets',
  assetsDir: '.',
  emptyOutDir: false,
  cssCodeSplit: false,
  rollupOptions: {
   input: ['src/entries/index.js'],
   output: {
    dir: 'assets',
    entryFileNames: '[name].bundle.js',
    chunkFileNames: '[name].chunk.js',
    assetFileNames: '[name].min.[ext]',
    manualChunks: {
     vendor: ['vue', 'video.js']
    }
   }
  }
 },
 plugins: [vue()],
 resolve: { alias: { vue: 'vue/dist/vue.esm-bundler.js' } }
}));
