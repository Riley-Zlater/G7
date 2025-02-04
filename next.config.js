const { parsed: localEnv } = require("dotenv").config();

const webpack = require("webpack");
const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);

module.exports = {
  webpack: (config) => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));
    

    // Add ESM support for .mjs files in webpack 4
    config.module.rules.push({
      test: /\.(js|jsx|mjs|graphql|gql)$/,
      use: ["babel-loader", "@graphql-tools/webpack-loader"],
      type: "javascript/auto",
      exclude: /node_modules/,
    });

    return config;
  },
};
