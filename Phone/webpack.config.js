const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//추가할 페이지 목록
const pages = ['PB_Call', 'PB_Dtail1', 'PB_Edit1', 'PB_List', 'Phone', 'PB_Insert'];
module.exports = {
  //각 페이지 연결
  entry: pages.reduce((config, page) => {
    config[page] = `./src/js/${page}.js`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    assetModuleFilename: 'images/[name][ext]', // 이미지 위치
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // CSS 분리
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource', // 이미지 파일 처리
      },
    ],
  },
  plugins: [
    //각html 파일 순회
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `./src/html/${page}.html`,
          filename: `html/${page}.html`,
          chunks: [page]
        })
    ),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // dist에 나올 CSS 파일 이름
    }),
    new CopyWebpackPlugin({
    patterns: [
        {
          from: path.resolve(__dirname, './src/images'),  //불러올 이미지 경로
          to: 'images'                                    //웹팩 이미지 저장 경로
        }
      ]
    })
  ],
};
