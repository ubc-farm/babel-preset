module.exports = {
  presets: [
    require('babel-preset-es2017'),
    require('babel-preset-es2016'),
    require('babel-preset-react'),
  ],
  plugins: [
    require('babel-plugin-external-helpers'),
  ],
};