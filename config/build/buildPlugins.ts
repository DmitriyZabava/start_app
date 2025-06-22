import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins({
	paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(), // Плагин отображения прогресса сборки
		new HtmlWebpackPlugin({
			template: paths.html, // Шаблон для генерации index.html
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css", // Имя итогового CSS-файла
			chunkFilename: "css/[name].[contenthash:8].css", // Имя чанков CSS
		}),
	];
}
