class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    if (this.words?.[word]?.word === word) {
      console.log('Это слово уже есть');
      return;
    }
    this.words[word] = {
      word: word,
      description: description,
    };
  }

  remove(key) {
    if (!this.words?.[key]) {
      console.log('Этого слова нет');
      return;
    }

    delete this.words[key];
  }

  get(key) {
    if (!this.words?.[key]) {
      console.log('Этого слова нет');
      return;
    }

    return this.words[key];
  }

  showAllWords() {
    const array = Object.keys(this.words);
    array.forEach((key) => {
      const word = this.words[key];
      console.log(`${word.word} - ${word.description}`);
    });
  }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
);

dictionary.remove('JavaScript');
dictionary.showAllWords();
