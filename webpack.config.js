let path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx$|ts$|tsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss|.css|.less$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    { loader: "style-loader" },
                    // Translates CSS into CommonJS
                    { loader: "css-loader" },
                    // Compiles Sass to CSS
                    { loader: "sass-loader" },
                    {
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                          // `postcssOptions` is needed for postcss 8.x;
                          // if you use postcss 7.x skip the key
                          postcssOptions: {
                            // postcss plugins, can be exported to postcss.config.js
                            plugins: function () {
                              return [
                                require('autoprefixer')
                              ];
                            }
                          }
                        }
                      }
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
        }
    },
};
