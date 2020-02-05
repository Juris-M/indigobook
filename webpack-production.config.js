const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/modal.jsx',
    output: {
        path: path.resolve(__dirname, 'webpage'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
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
                     },
                     { 
                         loader: 'postcss-loader',
                         options: {
                             ident: 'postcss',
                             plugins: () => [
                                 autoprefixer({
                                     browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                     ]
                                 })
                             ]
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
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      }    
};
