// Главная страница приложения
import { BugButton } from "app/providers/ErrorBoundary";

function MainPage() {
    return (
        <div>
            <h1>Main Page</h1>
            <BugButton/>
        </div>
    );
}

export default MainPage; // Экспорт компонента
