// @ts-check

import { StylableWebpackPlugin } from '@stylable/webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


/** @type {import('webpack').Configuration} */

export default {
    mode: 'development',
    devtool: 'source-map',
    //entry: './src/index.ts', // 入口文件改为.ts
    devServer: {
      port: 3000, // 设置Webpack开发服务器监听的端口号
      //host: '0.0.0.0', // 允许外部访问
      allowedHosts: [
        'zhiyouyuec.com', // 允许的主机名或域名
        'localhost', // 本地主机
      ],
      proxy: {
        '/ws': {
          target: 'wss://zhiyouyuec.com', // WebSocket服务器的地址
          ws: true, // 启用WebSocket代理
          secure: false, // 如果WebSocket服务器使用自签名证书，请将其设置为false
        },
      },
    },

    
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



 /*
devServer: {
  disableHostCheck: true
  host: '0.0.0.0'
 
  allowedHosts: [
     'example.com',
     'subdomain.example.com',
     'localhost'
   ]
  
 }
*/
