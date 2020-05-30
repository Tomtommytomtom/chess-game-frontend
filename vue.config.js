const path = require("path");
module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: path.resolve(__dirname, "../chess-game-backend/wwwroot"),
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.scss$/,
  //         use: ["vue-style-loader", "css-loader", "sass-loader"],
  //       },
  //       {
  //         test: /\.sass$/,
  //         use: [
  //           "vue-style-loader",
  //           "css-loader",
  //           {
  //             loader: "sass-loader",
  //             options: {
  //               indentedSyntax: true,
  //               // sass-loader version >= 8
  //               sassOptions: {
  //                 indentedSyntax: true,
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
};
