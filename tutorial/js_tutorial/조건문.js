// 조건문:조건의 결과에 따라 다른 코드를 실행하는 구문

let isShow = true;
let checked = false;

if (isShow) { // 조건이 true라면 밑에 구문을 실행하라
  console.log('show');
}

if (checked) {
  console.log('check'); // 실행 안됨
}


let isShow = true;

if (isShow) {
  console.log('show'); // 실행 됨 show
} else {
  console.log('hide') // 실행 안됨
}
