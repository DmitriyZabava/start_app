import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildCssLoaders } from "./loaders/buildCssLoaders";

export function buildLoaders({
    isDev,
}: BuildOptions): webpack.RuleSetRule[] {
    // Загрузчик для файлов (картинки, шрифты и т.д.)
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2|ttf|otf)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    // Загрузчик для SVG как React-компонентов
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    // Загрузчик для TypeScript файлов
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    // Загрузчик для SCSS/CSS файлов
    const scssLoader = buildCssLoaders(isDev);

    const babelLoader = {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
    };

    return [
        svgLoader, // SVG
        fileLoader, // Картинки и шрифты
        babelLoader,
        typescriptLoader, // TypeScript
        scssLoader, // SCSS/CSS
    ];
}
