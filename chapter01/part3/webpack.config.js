//引入一个包
const path = require('path');
const HTMLWebpackPlgin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//webpack中所有的配置信息都应该写在moudle.exports中
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            arrowFunciton: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            "chrome": '88'
                                        },
                                        //指定corejs的版本
                                        "corejs": '3',
                                        //使用corejs的方式 "usage" 表示按需加载
                                        "useBuiltIns": 'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlgin({
            title: '这是一个自定义的title'
        })
    ],
    //用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}