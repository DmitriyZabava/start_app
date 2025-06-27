import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins({
    paths,
    isDev
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new webpack.ProgressPlugin(), // Плагин отображения прогресса сборки
        new HtmlWebpackPlugin({
            template: paths.html, // Шаблон для генерации index.html
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css", // Имя итогового CSS-файла
            chunkFilename: "css/[name].[contenthash:8].css", // Имя чанков CSS
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];
    if ( isDev ) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin())
        // plugins.push( new BundleAnalyzerPlugin(
        // 	{ openAnalyzer: false }
        // ))
    }

    return plugins.filter(Boolean)
}
