// Компонент для переключения темы приложения
import * as s from "./ThemeSwitcher.module.scss"; // Стили для ThemeSwitcher
import { classNames } from "shared/lib/ClassNames/classNames"; // Утилита для объединения классов
import { Button } from "shared/ui/Button"; // Кнопка
import { Theme, useTheme } from "app/providers/ThemeProvider"; // Перечисление тем и хук
import { ButtonTheme } from "shared/ui/Button/ui/Button"; // Темы кнопки
import Moon from "shared/assets/icons/moon-stars-icon.svg"; // Иконка луны
import Sun from "shared/assets/icons/sun-icon.svg"; // Иконка солнца

// Пропсы для ThemeSwitcher
interface ThemeSwitcherProps {
	className?: string; // Дополнительный CSS-класс
}

// Функциональный компонент ThemeSwitcher
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme(); // Получаем текущую тему и функцию переключения

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames(s.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme} // Переключаем тему по клику
		>
			{/* Показываем иконку в зависимости от текущей темы */}
			{theme === Theme.DARK ? <Moon /> : <Sun />}
		</Button>
	);
};
