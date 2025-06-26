// Глобальные типы для поддержки импорта ассетов и стилей

declare module "*.scss" {
	interface IClassNames {
		[className: string]: string; // Ключ — имя класса, значение — строка
	}
	const classNames: IClassNames;
	export = classNames; // Экспортируем объект классов
}

// Типизация для SVG-файлов как React-компонентов
declare module "*.svg" {
	import React from "react";
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
// Типизация для других ассетов (картинки, шрифты и т.д.)
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.woff";
declare module "*.woff2";
declare module "*.otf";

declare const __IS_DEV__: boolean;