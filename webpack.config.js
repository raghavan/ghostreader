const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = ({mode, outputPath}) => {
    return {
        mode: (mode === 'dev') ? "development" : "production",
        devtool: (mode === 'dev') ? "cheap-module-source-map" : false,
        entry: {
            reader: path.resolve("src/content-scripts/reader.tsx"),
            popup: path.resolve("src/popup/index.tsx"),
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"],
            modules: ["src", "node_modules"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|ico)$/,
                    use: 'file-loader'
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve("src/static"),
                        to: path.resolve(outputPath),
                    }
                ]
            }),
            ...htmlWebpackPlugins(['reader'])
        ],
        output: {
            path: path.resolve(outputPath),
            filename: "[name].js"
        }
    };
}

function htmlWebpackPlugins(chunks) {
    return chunks.map(chunk => (
        new HtmlWebpackPlugin({
            filename: "[name].html",
            name: chunk,
            template: path.resolve("src/static/template.html")
        })
    ));
}