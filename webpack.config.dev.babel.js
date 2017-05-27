import {
  outputDirName,
  outputPath,
  context,
  entry,
  output,
  module_,
} from './webpack.config.prod.babel';

// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

const port = 9000;
const publicPath = `/${outputDirName}/`;

export default function () {
  return {
    context,

    entry: () => {
      const entries = entry();
      return Object.keys(entries).reduce((hash, key) => {
        hash[key] = [
          'react-hot-loader/patch',
          `webpack-dev-server/client?http://localhost:${port}`,
          'webpack/hot/only-dev-server',
          entries[key],
        ];
        return hash;
      }, {});
    },

    output: Object.assign(output, {
      publicPath,
    }),

    module: Object.assign(
      module_,
      {
        rules: module_.rules.map((rule) => {
          if (rule.test.toString() === /\.js$/.toString()) {
            rule.loaders.unshift('react-hot-loader/webpack');
          }
          return rule;
        }),
      },
    ),

    devtool: 'eval',

    devServer: {
      contentBase: outputPath,
      publicPath,
      port,
      hot: true,
      noInfo: false,
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  };
}
