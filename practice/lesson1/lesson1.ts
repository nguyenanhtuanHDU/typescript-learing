let arr: (string | number)[] = [1, "a", 2]; // mixed type
arr.push("asd");
arr.push(2)

let arr2 = ["a", 1];

console.log(">>> check type: ", arr); // [ 1, 'a', 2, 'asd', 2 ]
