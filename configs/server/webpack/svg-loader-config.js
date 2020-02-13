
const svg_loader = {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'react-svg-loader',
        }
    ]
};

module.exports = svg_loader;
