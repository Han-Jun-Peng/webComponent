import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
	mode: "production",
	devtool: "source-map",

	// 路径解析
	resolve: {
		alias: {
			src: path.resolve(__dirname, "src/"),
		},
		extensions: [".tsx", ".ts", ".jsx", ".js"],
	},
	// 入口
	entry: {
		index: "./src/story/**/*.js",
	},
	// 出口
	output: {
		path: path.resolve(__dirname, "lib"),
		__filename: "[name].[contenthash].js",
		clean: true,
	},
	// 加载器
	module: {
		rules: [
			{
				test: /\.[j|t]sx?$/i,
				exclude: ["/node_modules/"],
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
					},
				},
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					"postcss-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.svg$/i,
				type: "asset/inline",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},

	// 优化
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			chunks: "all",
		},
	},
	// 缓存
	cache: {
		type: "filesystem",
		buildDependencies: {
			config: [__filename],
		},
	},
};

export default config;
