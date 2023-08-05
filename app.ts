class Student {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log('name is' + this.name, 'age is' + this.age);
  }
}

const tuan = new Student('anh tuan', 22);
tuan.showInfo();
