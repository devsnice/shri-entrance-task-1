# Приложение для создания и редактирования информации о встречах сотрудников

Написано для Node.js 8 и использует библиотеки:

* express
* sequelize
* graphql

## Задание

Код содержит ошибки разной степени критичности. Некоторых из них стилистические, а некоторые даже не позволят вам запустить приложение. Вам необходимо найти и исправить их.

Пункты для самопроверки:

1. Приложение должно успешно запускаться
2. Должно открываться GraphQL IDE - http://localhost:3001/graphql/
3. Все запросы на получение или изменения данных через graphql должны работать корректно. Все возможные запросы можно посмотреть в вкладке Docs в GraphQL IDE или в схеме (typeDefs.js)
4. Не должно быть лишнего кода
5. Все должно быть в едином codestyle

## Запуск

```
npm i
npm run dev
```

## Ошибки

1. Поправил ошибку инициализации sequelize, передавался неправильный набор аргументов [[commit]](https://github.com/devsnice/shri-entrance-task-1/commit/1447cd752ae44ceda2fc2bb20205433cfdad3cdf)
2. Эндпоинт для graphql открывался на /graphgl [[commit]](https://github.com/devsnice/shri-entrance-task-1/commit/2a9c80c3f995908dc2118a6d5bd831e1f9320248)
3. Rooms resolver возвращал не все данные, убрал {offset: 1} [[commit]](https://github.com/devsnice/shri-entrance-task-1/commit/ef27a515a4ad65e18b57cd31597691ec975b7910)
4. Mutation changeEventRoom - в айди комнаты сохранялся айдишник события [[commit]](https://github.com/devsnice/shri-entrance-task-1/commit/6c1745877ea76b1b3ac8efedef7b90fe597bd671)
5. Добавил resolver функцию для получения информации о комнате, в которой проходит событие [[commit]](https://github.com/devsnice/shri-entrance-task-1/commit/e33d8ce759dc9eb0cb5596fee35a36a9018f06c3)
6. Не описана реализация mutation addUserToEvent, добавил логику [[commit]](https://github.com/devsnice/shri-entrance-task-1/commit/2423f2504d4f6ab2905a3a2980d725a48475bda0)
7. Добавил обработку ошибок на существование записей в базе данных [[commit]](https://github.com/devsnice/shri-entrance-task-1/commit/cb80e120af5a7649bb10ca8e8753df8108ae7186)

## Рефакторинг

1. Добавил prettier в проект для приведения кодовой базы к одному стайл-гайду
2. Разделил все graphql mutations на отдельные, обособленные модели и разложил всю логику по отдельным файлам
3. Так как приложение использует Node.js 8, переписал логику с промиссов на async/await, чтобы сделать код плоским
4. Почистил код от неиспользуемого кода

Для сброса данных в базе:

```
npm run reset-db
```
