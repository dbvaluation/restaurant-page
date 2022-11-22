const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        Header: './src/Header.js',
        Home: './src/Home.js',
        Menu: './src/Menu.js',
        Contact: './src/Contact.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({ title: 'Development' })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
};