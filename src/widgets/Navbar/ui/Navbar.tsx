// Компонент верхней навигационной панели
import * as s from "./Navbar.module.scss"; // Стили для Navbar
import { classNames } from "shared/lib/ClassNames/classNames"; // Утилита для объединения классов
import { AppLink } from "shared/ui/AppLink"; // Компонент ссылки
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink"; // Темы ссылок

// Пропсы для Navbar
interface NavbarProps {
	className?: string; // Дополнительный CSS-класс
}

// Функциональный компонент Navbar
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            {/* Блок с навигационными ссылками */}
            <div className={s.links}>
                <AppLink
                    className={s.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                    to={"/"}
                >
                    {" "}
                    Главная{" "}
                </AppLink>
                <AppLink to={"/about"}> О Сайте </AppLink>
            </div>
        </div>
    );
};
