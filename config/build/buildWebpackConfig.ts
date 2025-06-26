import webpack from "webpack";
import path from "path";

import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

// Основная функция для генерации webpack-конфига
export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode: mode, // Режим сборки (development/production)

        entry: path.resolve(paths.entry), // Точка входа

        output: {
            filename: "[name].[contenthash].js", // Имя выходного файла с хешем
            path: path.resolve(paths.build), // Путь для сборки
            clean: true, // Очищать папку билда перед сборкой
        },

        plugins: buildPlugins(options), // Подключаем плагины
        module: {
            rules: buildLoaders(options), // Подключаем загрузчики
        },
        resolve: buildResolvers(options), // Резолверы для модулей
        devtool: isDev ? "inline-source-map" : false, // Source map только в dev
        devServer: isDev ? buildDevServer(options) : undefined, // DevServer только в dev
    };
}
