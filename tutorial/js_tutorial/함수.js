// 함수(function): 특정 동작(기능)을 수해애하는 일부 코드의 집합(부분)

// 함수 선언
function helloFunc() {
  // 실행 코드
  console.log(1234);
}

helloFunc(); // 1234

// 활용1
function returnFunc() {
  return 123;
}

let a = returnFunc();

console.log(a); // 123

// 활용2
function sum(a, b) { // a와b는 매개변수(Parameters)
  return a + b;
}

let a = sum(1, 2); // 1, 2는 인수(Arguments)
let b = sum(2, 3);
let c = sum(4, 5);

console.log(a, b, c); // 3, 5, 9

// 활용3 이름이 있는 함수
// 함수 선언
function hello() {
  console.log('Hello');
}

// 함수 호출
hello(); // Hello

// 활용4 이름이 없는 함수(익명함수)
// 함수 표현
let world = function () {
  console.log('Wolrld')
}

// 함수 호출
world(); // World

// 활용5 객체 데이터
const heropy = {
  name: 'HEROPY',
  age: 85,
  // 메소드(Method):객체 데이터 부분에 함수로써 사용되는 것을 메소드라고 함
  getName: function () {
    return this.name;
  }
};

const hisName = heropy.getName();
console.log(hisName); // HEROPY
// or
console.log(heropy.getName()); // HEROPY