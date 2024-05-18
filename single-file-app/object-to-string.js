// number
console.log((1).toString(), (1).valueOf());

// string
console.log("1".toString(), "1".valueOf());

// boolean
console.log(typeof true);       // boolean
console.log(true.toString(), true.valueOf(), (true).valueOf(), +true);
console.log(false.toString(), false.valueOf());

// null
// console.log((null).toString());  // error
// console.log((null).valueOf());   // error
console.log(+null, 110 + null); // 偏数字
console.log("" + null); // 偏字符串

// undefined
console.log(typeof undefined);
// console.log(undefined.toString());      // error
// console.log(undefined.valueOf());       // error
console.log(+undefined, 110 + undefined); // 偏数字
console.log("" + undefined); // 偏字符串

// object
const obj = { name: "jiang", age: 18 };
console.log(obj.toString(), String(obj));       // [object Object] [object Object]
console.log(obj.valueOf(), +obj);       // { name: 'jiang', age: 18 } NaN
console.log(obj.valueOf() === obj);     // true

// Array
const arr = [];
console.log(arr.toString() + "----");
console.log(arr.valueOf(), arr.valueOf() === arr);
console.log(+arr);

arr.push(111);
console.log(arr.toString() + "----");       // "111"
console.log(arr.valueOf(), arr.valueOf() === arr);      // [ 111 ] true
console.log(+arr);

arr.push(222);
console.log(arr.toString() + "----");
console.log(arr.valueOf(), arr.valueOf() === arr);
console.log(+arr);
