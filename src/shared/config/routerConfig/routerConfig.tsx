// Конфигурация маршрутов приложения
import { RouteProps } from "react-router-dom"; // Тип для описания маршрута
import { MainPage } from "pages/MainPage"; // Главная страница
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage"; // Страница "О сайте"

// Перечисление всех маршрутов приложения
export enum AppRoutes {
    // eslint-disable-next-line
	MAIN = "main", // Главная
    // eslint-disable-next-line
	ABOUT = "about", // О сайте
    // eslint-disable-next-line
	NOT_FOUND = "not_found", // Страница ошибки
}

// Сопоставление маршрутов с их путями
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/", // Главная страница
    [AppRoutes.ABOUT]: "/about", // О сайте
    [AppRoutes.NOT_FOUND]: "/*", // Страница ошибки
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
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found, // Путь для страницы ошибки
        element: <NotFoundPage/>
    },
};
