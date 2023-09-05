const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");

/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [postcssPresetEnv, tailwindcss],
};

module.exports = config;
