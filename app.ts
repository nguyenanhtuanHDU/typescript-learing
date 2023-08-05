abstract class Animal {
  constructor(public name: string) {}

  abstract sayHello(): void; // class con khi kế thừa thì phải có sayHello
}

// const test = new Animal('dog') -> ko thể khởi tạo trực tiếp từ abstract class

class Dog extends Animal implements Animal {
  constructor(public name: string) {
    super(name);
  }

  sayHello(): void {
    // bắt buộc phải có khi extends
    console.log('Hello');
  }
}
