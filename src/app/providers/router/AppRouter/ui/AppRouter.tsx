// Компонент маршрутизации приложения
import { Suspense } from "react"; // Импорт для ленивой загрузки
import { Routes, Route } from "react-router"; // Импорт компонентов маршрутизации

import { routeConfig } from "shared/config/routerConfig/routerConfig";
import { PageLoader } from "widgets/PageLoader"; // Конфиг маршрутов

const AppRouter = () => {
    return (
        // Suspense позволяет показывать fallback во время загрузки ленивых компонентов
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {/* Генерируем маршруты на основе конфигурации */}
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        // Оборачиваем каждый маршрут в div для стилизации
                        element={(
                            <div className={"page-wrapper"}>
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
export default AppRouter