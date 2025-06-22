// Контекст и типы для работы с темой приложения
import { createContext } from "react";

// Перечисление доступных тем
export enum Theme {
	LIGHT = "light", // Светлая тема
	DARK = "dark", // Тёмная тема
}

// Интерфейс для значений контекста темы
export interface ThemeContextProps {
	theme?: Theme; // Текущая тема
	setTheme?: (theme: Theme) => void; // Функция для изменения темы
}

// Создание контекста темы
export const ThemeContext = createContext<ThemeContextProps>({});

// Ключ для хранения темы в localStorage
export const LOCAL_STORAGE_THEME_KEY = "theme";
