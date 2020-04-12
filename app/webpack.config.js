const path = require('path');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];


module.exports = {
    entry: './assets/scripts/App.js',
    devServer: {
        before: function(app, server) {
            server._watch('./*.html')
        },
        contentBase: path.join(__dirname),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname)
    },

    mode: "development",
    module: {
              rules: [
                  {
                      test: /\.css$/i,
                      use: [
                          'style-loader',
                          'css-loader?url=false',
                          {loader: 'postcss-loader', options: { plugins: postCSSPlugins}}
                         ]
                  }
                     ]
    }

};
