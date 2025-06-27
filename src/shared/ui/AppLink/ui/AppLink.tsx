// Универсальная ссылка для навигации по приложению
import * as s from "./AppLink.module.scss"; // Стили для ссылки
import { classNames } from "shared/lib/ClassNames/classNames"; // Утилита для объединения классов
import { Link, LinkProps } from "react-router-dom"; // Компонент и типы для роутер-ссылки
import { FC } from "react";

// Темы оформления ссылки
export enum AppLinkTheme {
    // eslint-disable-next-line
	PRIMARY = "primary", // Основная тема
    // eslint-disable-next-line
	SECONDARY = "secondary", // Вторичная тема
}

// Пропсы для компонента AppLink
interface AppLinkProps extends LinkProps {
	className?: string; // Дополнительный CSS-класс
	theme?: AppLinkTheme; // Тема ссылки
}

// Функциональный компонент ссылки
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY, // Тема по умолчанию
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(s.AppLink, {}, [className, s[theme]])} // Формируем итоговый класс
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children} {/* Контент ссылки */}
        </Link>
    );
};
