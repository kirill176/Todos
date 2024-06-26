# Todos

## Особливості

- **Перегляд задач:** Користувачі можуть переглядати додані вакансії.
- **Додавання задач:** Користувачі можуть додавати нові задачі.
- **Видалення задач:** Користувачі можуть видалити додані вакансії.
- **Детальна інормація:** Користувачі можуть переглянути детальну іформацію про задачу.
- **Пошук задач:** Користувачі можуть шукати здачі через поле пошуку. Задачі будуть шукатись по заголовку та по опису.
- **Фільтрація задач:** Користувачі модуть відфілтрувати задачі щоб виводились всі задачі або лише виконані або не виконані.
- **Перетягування задач:** Користувач може перетягнути задачу на інше місце. Вона стане слід за задачею на яку була перетягнута.




## Структура проекту

- **components:** В цій папці знаходяться компоненти, такі як `Todo`, які використовуются для відобрежаення задач та інших елементів інтерфейсу.
- **pages:** В цій папці знаходятся сторінки React, такі як `index.js`, які задають шлях та його основний контент.
- **styles:** В цій папці знаходятся файли стилів додатку.
- **types:** В цій папці знаходятся файли типів додатку.
- **utils:** В цій папці знаходятся файли функцій додатку та тестів до них.

## Завантаження

1. Клонуйте репозиторій:

    ```
    git clone https://github.com/kirill176/Todos.git
    ```

2. Перейдіть до дерикторії проекту:

    ```
    cd job-portal-app
    ```

3. Завантаже залежності:

    ```
    npm install
    ```

## Запуск

1. Запустіть додаток в режимі разробки:

    ```
    npm run dev
    ```

   Додаток буде доступний за адресою http://localhost:3000/

2. Для сбірки додатку в продакшн режимі:

    ```
    npm run build
    ```

3. Для запуску додатку в продакшн режимі:

    ```
    npm start
    ```

## Використання

- Переглядайте додані завдання.
- Натисніть на 'Details' для перегляду детальної інформації.
- Натисніть 'Add new Task' для додавання нової задачі.
- Введіть слово для пошуку по задачам та натисніть 'Search Task' для пошуку.
- Фільтруйте задачі відповідно до обраної залежності.

## Лицензия

[MIT License](https://opensource.org/licenses/MIT)
