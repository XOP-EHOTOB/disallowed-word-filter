const disallowedWords = require('./disallowedWords.json')

module.exports = class replaceDisallowedWords {
  constructor(props) {
    if (props && typeof props.additionalWords === 'string') {
      this.additionalWords = props.additionalWords
        .replace(/\s+/g, '')
        .toLowerCase()
        .split(',')
    } else {
      this.additionalWords = null
    }
  }

  check = (string, all) => {
    if (typeof string != 'string')
      return console.error('Отсуствует строка для проверки!')

    if (!all) {
      if (!this.additionalWords)
        return console.error('Нет списка запрещенных слов!')

      return (
        string
          .toLowerCase()
          .match(new RegExp(this.additionalWords.join('|'))) !== null
      )
    } else {
      let allWords = [...this.additionalWords, ...disallowedWords]
      return string.toLowerCase().match(new RegExp(allWords.join('|'))) !== null
    }
  }

  replace = (string, change, all) => {
    if (typeof string != 'string')
      return console.error('Отсуствует строка для проверки!')
    if (!all) {
      if (!this.additionalWords)
        return console.error('Нет списка запрещенных слов!')
      return string.replace(
        new RegExp(this.additionalWords.join('|'), 'gi'),
        change
      )
    } else {
      let allWords = [...this.additionalWords, ...disallowedWords]
      return string.replace(new RegExp(allWords.join('|'), 'gi'), change)
    }
  }
}
