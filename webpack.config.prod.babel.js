// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';

const path = require('path');
const fs = require('fs');

const PATH_SRC_ROOT = './src';
const PATH_DIST_ROOT = './dist';

export const outputPath = path.resolve(__dirname, PATH_DIST_ROOT);
export const outputDirName = 'js';

export const context = path.resolve(__dirname, PATH_SRC_ROOT);

export function entry() {
  const resolvePath = (...dir) => path.resolve(__dirname, PATH_SRC_ROOT, ...dir);
  const dirs = fs.readdirSync(resolvePath(''));
  return dirs
    .filter((dir) => dir !== 'commons' && fs.statSync(resolvePath(dir)).isDirectory())
    .filter((dir) => fs.existsSync(resolvePath(dir, 'index.js')))
    .reduce((hash, dir) => { hash[dir] = `./${dir}/index.js`; return hash; }, {});
}

export const output = {
  path: path.resolve(outputPath, outputDirName),
  filename: '[name].js',
};

export const module_ = { // eslint-disable-line no-underscore-dangle
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            data: '@import "index";',
            includePaths: [
              path.join(__dirname, './src/commons/components/_global-import-scss'),
            ],
          },
        },
      ],
    },
  ],
};

const devtool = 'source-map';

export default function () {
  return {
    context,
    entry,
    output,
    module: module_,
    devtool,
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: devtool,
        mangle: { keep_fnames: true },
      }),
    ],
  };
}
