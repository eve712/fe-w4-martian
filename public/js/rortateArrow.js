const getClockWiseAngle = num => {
    const dec = parseInt(num, 16)
    if(dec >= 4) return getArrowAngle(dec)
    else {
        dec += 16;
        return getArrowAngle(dec)
    }
}

const getArrowAngle = (dec, oneAngle) => {
    const oneAngle = 22.5;
    return oneAngle / 2 + (dec - 4) * oneAngle
}

const getDirection = (curr, des) => {
    let direction;
    const [diff1, diff2] = [des - curr, (16 - des) + curr];
    if(curr <= des) direction = diff1 < diff2 ? 'clock' : 'counter'
    else direction = diff1 < diff2 ? 'counter' : 'clock'
    return direction;
}