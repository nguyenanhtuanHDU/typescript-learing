interface Address {
  city: string;
}

interface Student {
  name: string;
  age: number;
  address?: Address;
}

const s1: Student = {
  name: 'tuan',
  age: 21,
};

const getStudent = (s: Student) => s;

// console.log(getStudent(s1).address.city); // nếu ko có address thì ko thể get đc city
console.log(getStudent(s1).address?.city);
