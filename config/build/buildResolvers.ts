import webpack from "webpack";
import { BuildOptions } from "./types/config";

// Функция для генерации опций резолвинга модулей для webpack
export function buildResolvers(
	options: BuildOptions
): webpack.ResolveOptions {
	return {
		extensions: [".tsx", ".ts", ".js"], // Расширения файлов для импорта без указания расширения
		preferAbsolute: true, // Предпочитать абсолютные пути
		modules: [options.paths.src, "node_modules"], // Где искать модули
		mainFiles: ["index"], // Главный файл по умолчанию
		alias: {}, // Алиасы для путей (можно добавить при необходимости)
	};
}
