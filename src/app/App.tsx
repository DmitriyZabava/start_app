// Главный компонент приложения
import { Suspense } from "react";
import "./styles/index.scss";

import { classNames } from "shared/lib/ClassNames/classNames"; // Утилита для объединения CSS-классов
import { useTheme } from "app/providers/ThemeProvider"; // Хук для работы с темой
// Компонент маршрутизации
import { Navbar } from "widgets/Navbar"; // Навигационная панель
import { Sidebar } from "widgets/Sidebar";
import AppRouter from "app/providers/router/AppRouter"; // Боковая панель
import { Loader } from "shared/ui/Loader";

function App() {
    const { theme } = useTheme(); // Получаем текущую тему из контекста

    return (
    // Основной контейнер приложения с динамическим классом темы
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<Loader/>}>
                {/* Навигационная панель в верхней части */}
                <Navbar />
                <div className="content-page">
                    {/* Боковая панель */}
                    <Sidebar />
                    {/* Основной роутер приложения */}
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App; // Экспорт главного компонента
