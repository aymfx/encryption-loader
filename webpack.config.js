const path = require('path');

module.exports = {
  entry: './examples/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'encryption-loader',
      }
    }]
  }
};

// module.exports = {
//   entry: './src/index.js',
//   target: 'node',
//   output: {
//     filename: 'index.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   module: {
//     rules: [{
//       include: [path.resolve(__dirname, 'src')], exclude: [path.resolve(__dirname, 'node_modules')],
//       test: /\.js$/,
//       use: {
//         loader: 'babel-loader',
//       }
//     }]
//   }
// };