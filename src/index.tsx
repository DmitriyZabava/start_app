// Точка входа в приложение
import { createRoot } from "react-dom/client"; // Импорт функции для создания корневого React-узла
import { BrowserRouter } from "react-router-dom"; // Импорт компонента для маршрутизации

import App from "app/App"; // Главный компонент приложения
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary"; // Провайдер темы

// Получаем корневой DOM-элемент
const root = createRoot(document.getElementById("root")!);
root.render(
    // Оборачиваем приложение в маршрутизатор и провайдер темы
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);
