class Student {
  private couter: number = 1;

  constructor(
    private name: string,
    public age: number,
    readonly gender: boolean
  ) {}

  show() {
    console.log('name: ', this.name);
    console.log('age: ', this.age);
    console.log('gender: ', this.gender);
  }

  get getNumber() {
    return this.couter;
  }

  set setNumber(num: number) {
    this.couter = num;
  }
}

const tuan = new Student('tuan', 22, true);
// console.log(tuan);
// tuan.show();

console.log(tuan.getNumber);
// tuan.setNumber(2);
tuan.setNumber = 2;
console.log(tuan.getNumber);
