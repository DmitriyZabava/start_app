// Универсальная кнопка для интерфейса
import { ButtonHTMLAttributes, FC } from "react";

import * as s from "./Button.module.scss"; // Стили для кнопки
import { classNames } from "shared/lib/ClassNames/classNames"; // Утилита для объединения классов

// Темы оформления кнопки
export enum ButtonTheme {
	CLEAR = "clear", // Прозрачная кнопка
}

// Пропсы для компонента Button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string; // Дополнительный CSS-класс
	theme?: ButtonTheme; // Тема кнопки
}

// Функциональный компонент кнопки
export const Button: FC<ButtonProps> = (props) => {
	const { className, theme, children, ...otherProps } = props;

	return (
		<button
			className={classNames(s.Button, {}, [className, s[theme]])} // Формируем итоговый класс
			{...otherProps}
		>
			{children} {/* Контент кнопки */}
		</button>
	);
};
