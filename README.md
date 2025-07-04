# Starter App

Приложение на React + TypeScript с поддержкой роутинга, тем (светлая/тёмная), модульных SCSS-стилей и современного Webpack-конфига. Отлично подходит как стартовый шаблон для новых проектов.

## 🚀 Возможности

-   Современный стек: React 19, TypeScript, SCSS
-   Роутинг с помощью react-router-dom
-   Переключение светлой/тёмной темы (ThemeSwitcher)
-   Модульная структура для масштабирования
-   Ленивые (lazy) страницы
-   Удобная организация компонентов и стилей

## 📁 Структура проекта

```
src/
  app/           # Корневой компонент, провайдеры, стили
  entities/      # Сущности (базовые бизнес-объекты)
  features/      # Фичи (отдельные пользовательские возможности)
  pages/         # Страницы приложения (Main, About)
  shared/        # Переиспользуемые компоненты, утилиты, конфиги
  widgets/       # Крупные UI-блоки (Navbar, Sidebar, ThemeSwitcher)
```

## 🛠️ Установка и запуск

1. Клонируйте репозиторий:
    ```bash
    git clone <repo-url>
    cd start_app-main
    ```
2. Установите зависимости:
    ```bash
    npm install
    # или
    yarn install
    ```
3. Запустите проект в режиме разработки:

    ```bash
    npm start
    # или
    yarn start
    ```

    Приложение будет доступно по адресу http://localhost:3000

4. Сборка для продакшена:
    ```bash
    npm run build:prod
    ```

## 📄 Доступные страницы

-   `/` — Главная страница
-   `/about` — О сайте
-   `/error` — Страница ошибки (заглушка)

## ⚙️ Основные зависимости

-   react, react-dom
-   react-router-dom
-   typescript
-   webpack, webpack-dev-server
-   sass, sass-loader, style-loader, css-loader

## 📜 Скрипты npm

-   `npm start` — запуск dev-сервера (порт 3000)
-   `npm run build:dev` — сборка в режиме разработки
-   `npm run build:prod` — сборка для продакшена

## 👤 Автор

Dmitri Zabava

## 📝 Лицензия

ISC

---

> Starter App — ваш быстрый старт для современных React-приложений!
