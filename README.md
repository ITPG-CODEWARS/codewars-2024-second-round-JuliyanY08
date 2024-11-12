## Описание
URL Shortener е уеб приложение, написано с React, което позволява на потребителите да съкращават дълги URL адреси. Потребителите могат да създават персонализирани алиаси,да задават дължина на случаен такъв, да задават максимален брой употреби и срок на годност за съкратените URL адреси. Освен това, приложението генерира QR кодове за всеки съкратен URL, които могат да бъдат изтеглени.

## Основни функции
-Създаване на съкратени URL адреси
-Поддръжка на персонализирани URL адреси
-Опции за задаване на максимален брой употреби и срок на годност
-Генериране на QR кодове за съкратените URL адреси
-Вход и регистрация на потребители с локално съхранение на данни
-Потребителските имена(username) на потребителите не могат да се повтарят, при съществуващ вече такъв ще излезе грешка и ще бъдат предложени подобни потребителски имена

## Технологии
-React:Библиотека за потребителски интерфейс и разработка на фронтенд
-Tailwind CSS:CSS фреймуърк с класове за оформление
-QRCode.js:Библиотека за генериране на QR кодове.
-LocalStorage:База данни за съхраняване на нужните елементи от приложението като пароли,потребителски имена и т.н.

## Инструкции за стартиране
Следвайте тези стъпки, за да стартирате приложението локално:

1. Клонирайте проекта.
2. Отворете Terminal или Comand port на папката.
3. Инсталирайте необходимите зависимости с команда "npm install"
4. Използвайте команда "npm run AppStart" за пускане на приложението.

## Използване

-Регистрирайте се или влезте в приложението.
-Въведете оригиналния URL адрес, който искате да съкратите.
-Изберете опции за персонализиран URL адрес, максимален брой употреби и срок на годност (по желание).
-Кликнете върху "Shorten URL".
-QR кодът за съкратения URL ще бъде генериран и можете да го изтеглите.



