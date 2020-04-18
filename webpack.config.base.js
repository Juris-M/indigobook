const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } =  require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        "core-js/modules/es.promise",
        "core-js/modules/es.array.iterator",
        './src/modal.jsx'

    ],
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js',
        chunkFilename: '[name].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                mode: 'global',
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                context: path.resolve(__dirname, 'src'),
                                hashPrefix: 'my-custom-hash'
                            }
                        }
                     }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: 'static/itemdata', to: 'itemdata' },
            { from: 'static/courtMaps', to: 'courtMaps' },
            { from: 'static/labelMaps', to: 'labelMaps' },
            { from: 'static/images', to: '.' },
            { from: 'static/screen.css', to: './screen.css' },
            { from: 'static/index.html', to: './index.html' },
            { from: 'static/indigobook.html', to: './indigobook.html' }
        ]),
     ]
};
