# Email Connection Tester

## Описание

**Mail-checker-for-sending-messages** — это небольшое приложение на Node.js для проверки работоспособности отправки сообщений через почтовые серверы. Оно позволяет проверить корректность введённых данных (логина, пароля, SMTP-сервера) и убедиться, что email-отправка настроена правильно.

---

## Функционал

- Проверка валидности email-аккаунта.
- Тестирование подключения к SMTP-серверу.
- Отправка тестового письма для проверки работы.

---

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/pome1lo/Mail-checker-for-sending-messages.git

2. Перейдите в папку проекта:
   ```bash
   cd Mail-checker-for-sending-messages
   ```
3. Установите зависимости:
   ```bash
   npm install
3. Создайте файл .env в корневой папке проекта и добавьте туда настройки:
   ```bash
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_password
   SMTP_TO=recipient_email@example.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587


## Использование

1. Запустите приложение:
   ```bash
   node mailer.js
   ```
2. Приложение отправит тестовое письмо на указанный адрес, если все настройки корректны.

---

## Структура проекта

```
email-connection-tester/
├── mailer.js         # Точка входа и логика отправки писем
├── .env              # Файл с конфиденциальными настройками
├── .gitignore        # Исключение файлов из репозитория
├── package.json      # Настройки и зависимости проекта
└── README.md         # Документация проекта
```

---

## Примеры логов

- Успешная отправка письма:
  ```
  🟩 The email has been sent successfully: 250 OK
  ```
- Ошибка при отправке:
  ```
  🟥 Error when sending an email: Invalid login or password
  ```

---

## Требования

- Node.js версии 14 и выше.
- Установленный менеджер пакетов `npm`.

---

## FAQ

**1. Почему я вижу ошибку при отправке письма?**

Убедитесь, что:
- Вы указали правильные SMTP-настройки в `.env` файле.
- У вас включен доступ для сторонних приложений в настройках вашей почты.

**2. Можно ли использовать это приложение с другим SMTP-сервером, кроме Gmail?**

Да, просто измените значения `SMTP_HOST` и `SMTP_PORT` в `.env` файле, указав параметры вашего сервера.

---

## Автор

Разработано с ❤️ разработчиком [pome1lo](https://github.com/pome1lo).

---

## Полезные ссылки
[How to Setup Gmail SMTP Server - Latest 2024](https://www.youtube.com/watch?v=kTcmbZqNiGw)

