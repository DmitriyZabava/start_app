// Главный компонент приложения
import "./styles/index.scss";

import { classNames } from "shared/lib/ClassNames/classNames"; // Утилита для объединения CSS-классов
import { useTheme } from "app/providers/ThemeProvider"; // Хук для работы с темой
import { AppRouter } from "app/providers/router/AppRouter/"; // Компонент маршрутизации
import { Navbar } from "widgets/Navbar"; // Навигационная панель
import { Sidebar } from "widgets/Sidebar"; // Боковая панель

function App() {
	const { theme } = useTheme(); // Получаем текущую тему из контекста
	return (
		// Основной контейнер приложения с динамическим классом темы
		<div className={classNames("app", {}, [theme])}>
			{/* Навигационная панель в верхней части */}
			<Navbar />
			<div className="content-page">
				{/* Боковая панель */}
				<Sidebar />
				{/* Основной роутер приложения */}
				<AppRouter />
			</div>
		</div>
	);
}

export default App; // Экспорт главного компонента
