const css_loader = {
    test: /\.css$/,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: "[local]"
                }
            }
        }
    ]
};

module.exports = css_loader;