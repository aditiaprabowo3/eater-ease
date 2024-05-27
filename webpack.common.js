/* eslint-disable spaced-comment */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageminMozjpeg = require('imagemin-mozjpeg');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    // eslint-disable-next-line global-require
                                    require('cssnano')({
                                        preset: 'default',
                                    }),
                                ],
                            },
                        },
                    },
                ],
            },

        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 70000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [{
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist'),
                    globOptions: {
                        ignore: ['**/images/heros/**'],
                    },
                },

            ],
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: 'sw.bundle.js',
            runtimeCaching: [{
                    urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-api',
                    },
                },
                {
                    urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-image-api',
                    },
                },
                {
                    urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/detail'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-detail',
                    },
                },
            ],
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, 'src/public/images/logo/brand-icon.png'),
        }),
        new ImageminWebpackPlugin({
            plugins: [
                ImageminMozjpeg({
                    quality: 50,
                    progressive: true,
                }),
            ],
        }),
        // eslint-disable-next-line spaced-comment
        //new BundleAnalyzerPlugin(),
    ],
};