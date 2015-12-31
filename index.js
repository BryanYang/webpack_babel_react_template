'use strict';

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var app = express();

/*
var config = require("./webpack.config.dev.js");


var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/'
}));
*/

var compiler = webpack({
    entry: [
        'webpack-hot-middleware/client', 
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
      loaders: ['babel']
    
    }
    ]
  },
   
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
  ]

});

app.use(webpackDevMiddleware(compiler, {
     noInfo: true
     
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'docs/src/index.html'));
});

app.listen(3001, '10.1.82.255', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3001');
});