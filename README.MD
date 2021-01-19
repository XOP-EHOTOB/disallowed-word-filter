# disallowed-word-filter

Модуль для замены запрещенных слов в строке (Так же содержит более 600 встроенных русских матов)

<p align="center">
<a href="https://www.npmjs.com/package/disallowed-word-filter"><img src="https://img.shields.io/npm/v/disallowed-word-filter.svg?style=flat-square" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/disallowed-word-filter"><img src="https://img.shields.io/npm/dt/disallowed-word-filter.svg?style=flat-square" alt="NPM downloads"></a>
</p>

# Подключение

```js
const replaceDisallowedWords = require('disallowed-word-filter')
const myFilter = replaceDisallowedWords({
  additionalWords: 'Привет, Пока', // Дополнительные запрещенные слова
})
```

<p>Для использования доступно 2 функции check и replace</p>

check - ищет в строке запрещенные слова и возвращает true или false
(Принимает 2 параметра: Строку для проверки и флаг true/false (Сверять ли строку с 600 встроиными матными словами))

replace - Заменяет запрещенные слова
(Принимает 3 параметра: строку для проаерки, строку для замены, флаг true/false (Сверять ли строку с 600 встроиными матными словами))

Библиотека содержит 600 матных слов

<p>Пример использования:</p>

```js
const replaceDisallowedWords = require('disallowed-word-filter')
const myFilter = replaceDisallowedWords({
  additionalWords: 'Привет, Пока', // Дополнительные запрещенные слова
})

myFilter.check('привет') // В результате получим true так как это слово мы указали запрещенным

myFilter.check('(Здесь каке либо матное слово)', true) // Получим true так как мы указали флаг для сравнения строки с встроееным списком запрещенных матных слов

myFilter.replace('Привет, как дела?', 'Ку') // Получим строку "Ку, как дела?"

myFilter.replace('Ты (Здесь каке либо матное слово)', '***', true) // Получим строку "Ты ***" Так как мы сверяем строку с встроенным списком запрещенных матных слов
```

<a href="https://vk.com/xop_enotov"><img src="https://avatanplus.com/files/resources/original/59ec5c2dbb92e15f434812c8.png" alt="Подписаться"></a>
