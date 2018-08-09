// eslint-disable-next-line no-unused-vars
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    vue: {
      css: {
        loaderOptions: {
          sass: {
            data: '@import "@/scss/base.scss";'
          }
        }
      }
    },
  });

  api.render('./template');
};
