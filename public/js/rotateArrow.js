import { $arrow } from './ref.js';
import { pipe } from './util.js';

// 다음 16진수 받아와서, 10진수로 변환, 각도 구해서, 회전시키는 함수
const rotateArrow = next => {
    pipe(hexToDecimal,
        getArrowAngle,
        rotate
    )(next)
}

const hexToDecimal = hex => parseInt(hex, 16);
const getArrowAngle = next => pipe(getArrowStyle, getCurrAngle, getNextAngles, getDiffs, getRealAngle)(next)
const rotate = angle => $arrow.style.transform = `rotate(${angle}deg)`;

// ==================================
const getArrowStyle = next => [$arrow.getAttribute('style'), next];

const getCurrAngle = ([style, next]) => [(style === null) ? 0 : style.slice(18, -5), next]

const getNextAngles = ([curr, next]) => [curr, getAngle(next), (getAngle(next) - 360)]

const getDiffs = ([curr, next1, next2]) => [getDiff(curr, next1), getDiff(curr, next2), next1, next2];

const getRealAngle = ([diff1, diff2, next1, next2]) => diff1 > diff2 ? next2 : next1;

const getDiff = (currAngle, nextAngle) => Math.abs(Math.abs(currAngle) - Math.abs(nextAngle));

const getAngle = num => {
    const oneAngle = 22.5;
    if(num < 4) num += 16;
    return oneAngle / 2 + (num - 4) * oneAngle
}

export default rotateArrow;