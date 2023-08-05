class Student {
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
}

const tuan = new Student('tuan', 22, true);
// console.log(tuan);
tuan.show();
