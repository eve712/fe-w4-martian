const $arrow = document.querySelector('.table__arrow');

// getArrowAngle에서 각도를 받아와서 회전시키는 함수
const rotateArrow = (_curr, _des) => {
    const [curr, des] = [parseInt(_curr, 16), parseInt(_des, 16)];
    const angle = getArrowAngle(curr, des);
    $arrow.style.transform = `rotate(${angle}deg)`
}

// 화살표의 현재 위치와 목표위치를 계산해서 빠른 방향의 각도를 알아내는 함수
const getArrowAngle = (curr, des) => {
    const style = $arrow.getAttribute('style');
    const currAngle = (style === null) ? 0 : style.slice(18, -5)
    const [angle1, angle2] = [getAngle(des), getAngle(des) - 360];

    const diff1 = Math.abs(Math.abs(currAngle) - Math.abs(angle1));
    const diff2 = Math.abs(Math.abs(currAngle) - Math.abs(angle2));
    const realAngle = diff1 > diff2 ? angle2 : angle1;
    return realAngle;
}

const getAngle = num => {
    const oneAngle = 22.5;
    if(num < 4) num += 16;
    return oneAngle / 2 + (num - 4) * oneAngle
}

export default rotateArrow;