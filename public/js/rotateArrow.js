const $arrow = document.querySelector('.table__arrow');

const rotateArrow = (_curr, _des) => {
    let angle;
    const [curr, des] = [parseInt(_curr, 16), parseInt(_des, 16)];
    if (getDirection(curr, des) === 'clock') {
        angle = getClockWiseAngle(des)
    }
    else if(getDirection(curr, des) === 'counter') {
        angle = getClockWiseAngle(des) - 360;
    }
    $arrow.style.transform = `rotate(${angle}deg)`
}

const getDirection = (curr, des) => {
    let direction;
    const [diff1, diff2] = [des - curr, (16 - des) + curr];
    if(curr <= des) direction = diff1 < diff2 ? 'clock' : 'counter'
    else direction = diff1 < diff2 ? 'counter' : 'clock'
    return direction;
}

const getClockWiseAngle = num => {
    if(num >= 4) return getArrowAngle(num)
    else {
        num += 16;
        return getArrowAngle(num)
    }
}

const getArrowAngle = num => {
    const oneAngle = 22.5;
    return oneAngle / 2 + (num - 4) * oneAngle
}

export default rotateArrow