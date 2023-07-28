const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав';
  },
};

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик';
  },
};

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  this.isDomestic = isDomestic;
  return this;
}
const bindDog = makeDomestic.bind(dog, true);
bindDog();
console.log(`DOG`, dog);

makeDomestic.call(bird, false);
console.log(`BIRD`, bird);

makeDomestic.apply(bird, [true]);
console.log(`BIRD`, bird);
