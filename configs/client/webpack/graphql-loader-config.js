const scss_loader = {
    test: /\.gql$/,
    exclude: /\/node_modules\//,
    use: [
        'raw-loader'
    ]
};

module.exports = scss_loader;

