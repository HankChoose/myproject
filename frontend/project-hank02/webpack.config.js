// @ts-check

import { StylableWebpackPlugin } from '@stylable/webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


devServer: {
 //disableHostCheck: true
 host: '0.0.0.0'
 /*
 allowedHosts: [
    'example.com',
    'subdomain.example.com',
    'localhost'
  ]
  */
}

/** @type {import('webpack').Configuration} */
export default {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [new StylableWebpackPlugin(), new HtmlWebpackPlugin({ title: 'Stylable App' })],
    cache: { type: 'filesystem' },
};
