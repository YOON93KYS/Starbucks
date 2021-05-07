// String(문자 데이터)


let myName = "HEROPY"; // 변수 myName에 HEROPY라는 글자를 할당
let email = 'aaaa@gmail.com'; // 변수 email에 HEROPY를 할당
let name = `Hello ${myName}`; // ${myName}:보간


console.log(myName); // HEROPY
console.log(email); // aaaa@gmail.com
console.log(hello); // Hello HEROPY


// 큰 따옴표와 작은 따옴표의 차이(차이없음)
"" // 문자 정의
'' // 문자 정의
`` // backtick, 중간에 다른 데이터를 보간해서 끼워 넣을 수 있음


// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냄

let number = 123;
let opacity = 1.57;

console.log(number); // 123
console.log(opacity); // 1.57

// Boolean(불린 데이터)
// True, false

let checked = true;
let isShow = false;

console.log(checked); // true
console.log(isShow); // false

// Undefined
// 값이 할당되지 않은 상태 (JS에서 사용되는 특이한 케이스)

let undef; // 값이 없는 상태라는 것을 Undefined로 표시함
let obj = { abc: 123};

console.log(undef); // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined

// Null
// 어떤 값이 의도적으로 비어있음을 의미함


// Null과 Undefined의 차이
// 의도적이냐 의도적이지 않느냐
// Null은 의도적으로 값이 없다는 것을 명시한 것이고, Undefined는 의도적으로 값이 없는거를 명시하지 않음
//


// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장

let user = {
 // Key: Value,
 name: 'HEROPY'
 age: 85,
 isValid: true
};

console.log(user.name); // HEROPY
console.log(user.age); // 85
console.log(user.isValid); // true

// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); //Apple
console.log(fruits[1]); //Banana
console.log(fruits[2]); //Cherry

