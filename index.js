const path = require('path');

// eslint-disable-next-line no-unused-vars
module.exports = (api, projectOptions) => {
  api.configureWebpack(webpackConfig => {
    return {
      resolve: {
        alias: {
          scss: path.resolve(__dirname, '../../src/scss/')
        }
      }
    }
  })
};
