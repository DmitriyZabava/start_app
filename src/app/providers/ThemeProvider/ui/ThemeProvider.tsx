// Провайдер для управления темой приложения
import { useMemo, useState, FC, PropsWithChildren } from "react";

import {
	LOCAL_STORAGE_THEME_KEY, // Ключ для хранения темы в localStorage
	Theme, // Перечисление доступных тем
	ThemeContext, // Контекст темы
} from "../lib/ThemeContext";

// Получаем тему по умолчанию из localStorage или используем светлую тему
const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

// Компонент-провайдер темы
const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme); // Состояние текущей темы

	// Мемоизация значений контекста для оптимизации
	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	);

	return (
		// Передаём значения темы через контекст
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider; // Экспорт провайдера темы
