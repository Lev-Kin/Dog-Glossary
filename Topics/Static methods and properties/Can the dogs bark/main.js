class Animal {
  constructor() {
  }
}
class Dog extends Animal {
  constructor() {
    super();
  }
  static bark() {
    console.log('Woof!');
  }
}