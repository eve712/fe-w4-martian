const $ = (selector, base = document) => base.querySelector(selector);

// '함수를 연달아 실행해 결과값을 반환하는 함수'를 반환하는 pipe 함수
const pipe = (...fns) => arg => fns.reduce((arg, fn) => fn(arg),arg)

export {
    $,
    pipe
}