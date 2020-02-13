const path = require('path');
const nodeExternals = require('webpack-node-externals');

const plugins = require('./webpack/plugins.js');
const optimization = require('./webpack/optimization.js');
const resolve = require('./webpack/resolve.js');

const ts_loader = require('./webpack/ts-loader-config.js');
const svg_loader = require('./webpack/svg-loader-config.js');
const scss_loader = require('./webpack/scss-loader-config.js');
const css_loader = require('./webpack/css-loader-config.js');
const graphql_loader = require('./webpack/graphql-loader-config.js');

const config =  {
    entry: [
        'webpack/hot/poll?100',
        './src/server/main.ts',
    ],
    output: {
        path: path.resolve(__dirname, '../../public/server'),
        filename: 'server.js',
    },
    mode: "development",
    target: "node",
    externals: [
        nodeExternals({
            whitelist: ['webpack/hot/poll?100'],
        }),
    ],
    resolve,

    watchOptions: { aggregateTimeout: 100 },

    devtool: "eval-source-map",

    module: {
        rules: [
            ts_loader,
            svg_loader,
            scss_loader,
            css_loader,
            graphql_loader
        ]
    },
    optimization,

    plugins,
};

module.exports = config;