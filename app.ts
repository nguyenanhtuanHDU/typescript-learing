class Student {
  private name: string;
  public age: number;
  readonly gender: boolean;

  constructor(name: string, age: number, gender: boolean) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  showInfo() {
    console.log(
      'name is' + this.name,
      '\nage is' + this.age,
      '\ngender is' + (this.gender ? 'male' : 'female')
    );
  }
}

const tuan = new Student('anh tuan', 22, true);
tuan.showInfo();

// console.log(tuan.name); -> failed -> name là private nên ko truy cập được
console.log(tuan.age); // success -> age là public nên truy cập đc
// tuan.gender = false -> failed ->  gender là readonly nên ko thể gán được
