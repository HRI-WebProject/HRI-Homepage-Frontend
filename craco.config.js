const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // "@primary-color": "#1DA57A",
              "@primary-color": "#2f5597",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        jsConfigPath: "jsconfig.paths.json",
      },
    },
  ],
};
