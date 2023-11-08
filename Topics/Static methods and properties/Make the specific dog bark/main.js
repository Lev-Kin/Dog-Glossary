class Animal {
    constructor() {
    }
}

class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }

    static bark(dog) {
        return `${dog.name}: Woof!`;
    }
}

const vesper = new Dog('Vesper');