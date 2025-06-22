// Боковая панель приложения
import { useState } from "react";

import * as s from "./Sidebar.module.scss"; // Стили для Sidebar
import { classNames } from "shared/lib/ClassNames/classNames"; // Утилита для объединения классов
import { Button } from "shared/ui/Button"; // Кнопка для управления
import { ThemeSwitcher } from "widgets/ThemeSwitcher"; // Переключатель темы

// Пропсы для Sidebar
interface SidebarProps {
	className?: string; // Дополнительный CSS-класс
}

// Функциональный компонент Sidebar
export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false); // Состояние: свернута ли панель

	// Функция для переключения состояния панели
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
				className,
			])}
		>
			{/* Кнопка для сворачивания/разворачивания панели */}
			<Button onClick={onToggle}>toggle</Button>
			<div className={s.switchers}>
				{/* Переключатель темы */}
				<ThemeSwitcher />
			</div>
		</div>
	);
};
