// Хук для работы с темой приложения
import { useContext } from "react";
import {
    ThemeContext, // Контекст темы
    Theme, // Перечисление тем
    LOCAL_STORAGE_THEME_KEY, // Ключ для хранения темы в localStorage
} from "./ThemeContext";

// Интерфейс возвращаемого значения хука
interface UseThemeResult {
	toggleTheme: () => void; // Функция для переключения темы
	theme: Theme; // Текущая тема
}

// Хук для получения и изменения темы
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext); // Получаем тему и функцию её изменения из контекста

    // Функция для переключения темы
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK; // Определяем новую тему
        setTheme(newTheme); // Устанавливаем новую тему
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme); // Сохраняем тему в localStorage
    };

    return { theme, toggleTheme }; // Возвращаем текущую тему и функцию переключения
}
