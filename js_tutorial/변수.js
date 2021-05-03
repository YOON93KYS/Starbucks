// var (권장사양은 아님)
// 발에 있어서 엄청 큰 단점을 가지고 있어 현재에는 거의 사용하지 않습니다.
// Hosting(호이스팅)문제:해당 변수의 선언부를 스코프 최상단으로 올려버리는 것


var a = 123;
function func() {
console.log(a); // undefined
var a = 456;
console.log(a); // 456
}
func();


출처: https://hoondev.tistory.com/101 [hoonDEV]




// let
// 재사용이 가능
// 변수 선언

let a = 2;
let b = 5;


console.log( a + b ); // 7
console.log( a - b ); // -3
console.log( a * b ); // 10
console.log( a / b ); // 0.4

// 값의 재할당 가능

let a = 12;
console.log(a); // 12

a = 999;
console.log(a); // 99

// const
// 값의 재할당 불가

const a = 12:
console.log(a); // 12

a = 999;
console.log(a) // TypeError


