const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap(options => {
        options.transpileOnly = true;
        return options;
      });

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          isCustomElement: tag => tag.startsWith('dx-')
        };
        return options;
      });
  }
})