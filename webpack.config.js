
module.exports = {
    mode: 'development',
    entry: './src/scripts/index.js',
    output: {
        filename: 'main.js',
        path: `${__dirname}/dist`,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
