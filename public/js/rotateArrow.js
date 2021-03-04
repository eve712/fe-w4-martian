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

// ===== pipe 함수로 리팩토링 필요 ===== 
// 화살표의 현재 위치와 다음 위치를 계산해서 빠른 방향의 각도를 알아내는 함수
const getArrowAngle = next => {
    const style = $arrow.getAttribute('style');
    const currAngle = (style === null) ? 0 : style.slice(18, -5)
    const [angle1, angle2] = [getAngle(next), getAngle(next) - 360];

    const [diff1, diff2] = [getDiff(currAngle, angle1), getDiff(currAngle, angle2)];
    const realAngle = diff1 > diff2 ? angle2 : angle1;
    return realAngle;
}

const getDiff = (currAngle, nextAngle) => Math.abs(Math.abs(currAngle) - Math.abs(nextAngle));

const getAngle = num => {
    const oneAngle = 22.5;
    if(num < 4) num += 16;
    return oneAngle / 2 + (num - 4) * oneAngle
}

const rotate = angle => $arrow.style.transform = `rotate(${angle}deg)`;

export default rotateArrow;