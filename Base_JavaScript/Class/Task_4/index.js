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

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    if (this.words?.[word]?.word === word) {
      console.log('Это слово уже есть');
      return;
    }
    this.words[word] = {
      word: word,
      description: description,
      isDifficult: true,
    };
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
);

hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
);

hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
);

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary);
