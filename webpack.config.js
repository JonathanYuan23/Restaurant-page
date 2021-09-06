
module.exports = {
    mode: 'development',
    entry: './src/scripts/index.js',
    output: {
        filename: 'main.js',
        path: `${__dirname}/dist`,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // module loader chains are executed from right to left
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
