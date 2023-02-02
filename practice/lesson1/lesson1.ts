type testType = string | number; //Type Aliases

function addNumberOrString(a: testType, b: testType) {
  // union type
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}

console.log('>>> check res: ', addNumberOrString('s', 'a'));

