class Animal {
  constructor(public name: string, public size: number) {}

  sayHello() {
    console.log('Hello');
  }
}

class Dog extends Animal {
  constructor(public name: string, public size: number, public color: string) {
    super(name, size); // gọi lại constructor của class Animal
  }

  sayHelloCopy(): void {
    super.sayHello(); // gọi lại method của class Animal
  }
}

const dog = new Dog('dog 1', 2, 'red');

console.log(dog);
