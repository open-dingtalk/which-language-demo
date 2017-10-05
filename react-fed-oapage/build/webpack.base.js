const path = require('path');
const autoprefixer = require('autoprefixer');

function resolve(dir){
  return path.join(__dirname,'..',dir)
}

let config = {
  entry: {
    app: './src/app.js',
    vendor: ['react','react-dom','react-router-dom','redux','history','react-redux','react-router-redux','redux-thunk']
  },
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  devtool: "source-map",
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: ['babel-loader'],
        include: path.join(__dirname, '../src') 
      },
      {
        test: /\.jsx$/, 
        exclude: /node_modules/, 
        use: ['babel-loader'],
        include: path.join(__dirname, '../src') 
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            }
          }, 
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({
                remove: false,
                browsers: ['last 2 versions', 'ie > 8', 'safari > 7'],
              })],
              sourceMap: 'inline'
            }
          }, 
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      }, 
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      }, 
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&minetype=application/octet-stream',
      }, 
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&minetype=image/svg+xml',
      }, 
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['url-loader?limit=8192'],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src'),
    ],
    extensions: ['.js','.json','.jsx','.css']
  }
};

module.exports = config;