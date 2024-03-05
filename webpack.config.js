const path = require('node:path'); // para conocer la ruta del archivo
const HtmlWebpackPlugin = require('html-webpack-plugin'); // para trabajar con html

module.exports = {
  entry: './src/index.js', // archivo de entrada o principal
  output: {
    path: path.resolve(__dirname, 'dist'), // carpeta de salida (dist -> distribution es un standart)
    filename: 'main.js' // nombre del archivo de salida, puede ser main o bundle, no importa
  },
  resolve: {
    extensions: ['.js'], // extensiones que vamos a utilizar
  },
  module: {
    rules: [
      {
        test: /\.js?$/, // expresion regular para saber que archivos vamos a utilizar
        exclude: /node_modules/, // excluir archivos de node_modules
        use: {
          loader: 'babel-loader', // configuracion para babel
        }
      } // sirve para que webpack pueda entender archivos, ya sea css, html, imagenes, etc
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true, // inyectar un archivo js en el html
        template: './public/index.html', // archivo de entrada
        filename: './index.html' // archivo de salida
      }
    )
  ],
};