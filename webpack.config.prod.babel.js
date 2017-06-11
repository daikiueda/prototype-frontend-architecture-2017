const path = require('path');
const fs = require('fs');

const PATH_SRC_ROOT = './src';
const PATH_DIST_ROOT = './dist';

export const outputPath = path.resolve(__dirname, PATH_DIST_ROOT);
export const outputDirName = 'js';

export const context = path.resolve(__dirname, PATH_SRC_ROOT);

export function entry() {
  const resolvePath = (dir) => path.resolve(__dirname, PATH_SRC_ROOT, dir);
  const dirs = fs.readdirSync(resolvePath(''));
  return dirs
    .filter((dir) => dir !== 'commons' && fs.statSync(resolvePath(dir)).isDirectory())
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
              path.join(__dirname, './src/commons/components/_global-import-styles'),
            ],
          },
        },
      ],
    },
  ],
};

export default function () {
  return {
    context,
    entry,
    output,
    module: module_,
  };
}
