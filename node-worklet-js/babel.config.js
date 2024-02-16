module.exports = {
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    "./plugin"
  ],
  presets: ["@babel/preset-typescript"],
};
