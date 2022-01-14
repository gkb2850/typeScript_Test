//引入一个包
const path = require('path');
const HTMLWebpackPlgin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//webpack中所有的配置信息都应该写在moudle.exports中
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            arrowFunction: false,
            const: false
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
            },
            {
                test: /\.less$/,
                use:[
                    "style-loader", 
                    "css-loader",
                    //引入postcss
                    {
                       loader: "postcss-loader",
                       options: {
                           postcssOptions: {
                               plugins:[
                                   [
                                       "postcss-preset-env",
                                       {
                                           browsers: "last 2 version"
                                       }
                                   ]
                               ]
                           }
                       } 
                    },
                    "less-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlgin({
            template: './src/index.html'
        })
    ],
    //用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: 'development'
}