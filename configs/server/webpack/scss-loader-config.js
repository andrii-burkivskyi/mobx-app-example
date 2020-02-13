const AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
];

const scss_loader = {
    test: /\.s(a|c)ss$/,
    exclude: /\/node_modules\//,
    use: [
        'style-loader',
        {
            loader: "css-loader",
            options: {
                modules: {
                    localIdentName: "[name]--[local]",
                }
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                parser: 'postcss-scss',
                plugins: (bundler) => [
                    require('postcss-import')({
                        addDependencyTo: bundler
                    }),
                    require('precss')(),
                    require('autoprefixer')()
                ]
            }
        },
        'sass-loader'
    ]
};

module.exports = scss_loader;

