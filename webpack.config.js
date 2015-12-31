var path = require('path')
var webpack = require('webpack')
var config = {
    entry: [
       './docs/src/js/app.jsx'
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel?presets[]=react,presets[]=es2015'
        },
        { test: /\.less$/, loader: "style!css!less" },
        { test: /\.css$/, loader: "style!css" },
        {test:/\.(ttf|eot|woff|woff2|otf|svg)$/, loader:'file-loader?name=./font/[name].[ext]'},
        { test: /(\.js|\.jsx)$/, loader: 'eslint-loader', exclude: /(node_modules|\.css$|\.less$)/ }
        ]
    },
    externals: {"react": "React", "react-dom": "ReactDOM"},
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.UglifyJsPlugin({ compressor: {warnings: false } })
    ]
}

module.exports = config;



