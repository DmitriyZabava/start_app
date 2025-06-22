// Конфигурация маршрутов приложения
import { RouteProps } from "react-router-dom"; // Тип для описания маршрута
import MainPage from "pages/MainPage/ui/MainPage"; // Главная страница
import { AboutPage } from "pages/AboutPage"; // Страница "О сайте"

// Перечисление всех маршрутов приложения
export enum AppRoutes {
	MAIN = "main", // Главная
	ABOUT = "about", // О сайте
	ERROR = "error", // Страница ошибки
}

// Сопоставление маршрутов с их путями
export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/", // Главная страница
	[AppRoutes.ABOUT]: "/about", // О сайте
	[AppRoutes.ERROR]: "/error", // Страница ошибки
};

// Конфигурация для компонента <Routes/>
export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main, // Путь для главной
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about, // Путь для страницы "О сайте"
		element: <AboutPage />,
	},
	[AppRoutes.ERROR]: {
		path: RoutePath.error, // Путь для страницы ошибки
		// element: <ErrorPage/>
	},
};
