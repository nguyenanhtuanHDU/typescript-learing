const identity = <T>(arg: T): T => arg;
// T : đại diện cho kiểu dữ liệu động

console.log(identity<string>('tuan')); // tuan
console.log(identity<number>(10)); // 10

// áp dụng với interface
interface User {
  username: string;
  age: number;
  gender: boolean;
}

console.log(identity<User>({ username: 'tuan', age: 22, gender: true }));
// { username: 'tuan', age: 22, gender: true }
