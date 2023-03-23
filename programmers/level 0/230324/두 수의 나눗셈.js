/* 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요. */

function solution(num1, num2) {
    return Math.floor((num1 / num2) * 1000);
}

/*
Math.floor와 동일하게 쓰이는 연산자 ~~
function solution(num1, num2) {
    return ~~((num1 / num2) * 1000);
}

Math.floor vs Math.trunc
Math.floor는 내림이기 때문에 음수일 때 정수부분 값이 원래 값보다 1이 작음
Math.trunc는 소수점만 버리고 정수부분만 반환해주는 메소드
Math.floor(-4.5); // -5
Math.trunc(-4.5); // -4
*/
