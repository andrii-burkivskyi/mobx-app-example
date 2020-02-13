const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    new ForkTsCheckerWebpackPlugin({
        tsconfig: path.resolve(__dirname, '../tsconfig.json')
    }),
    new webpack.DefinePlugin({
        CONFIG: JSON.stringify(require("config"))
    }),
    new webpack.LoaderOptionsPlugin({
        debug: true
    }),
];

module.exports = plugins;