// Функция для генерации конфигурации dev-сервера webpack
import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(
	options: BuildOptions
): DevServerConfiguration {
	return {
		port: options.port, // Порт для dev-сервера
		open: {
			app: { name: "Chrome" }, // Открывать в Chrome
		},
		historyApiFallback: true, // Для поддержки client-side routing
	};
}
