export const DATA_TYPE_NAME = {
    PIE: 'pie',
    // BAR: 'bar',
    // LINE: 'line',
    LINE: 'line'
}

export const SVG_CONTAINER_SIZE = {
    WIDTH: document.documentElement.clientWidth * 0.7,
    HEIGHT: document.documentElement.clientHeight * 0.7,
    MARGIN: { top: 50, bottom: 30, left: 80, right: 80 },
    INNER_RADIUS: 100,
    OUTER_RADIUS: document.documentElement.clientHeight * 0.7 * 0.4,
}

export function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


const RANDOM_FAKE_DATA = {
    MIN_VALUE: 200,
    MAX_VALUE: 2500,
}

export function getRandomNum() {
    return Math.floor(Math.random() * (RANDOM_FAKE_DATA.MAX_VALUE - RANDOM_FAKE_DATA.MIN_VALUE) + RANDOM_FAKE_DATA.MIN_VALUE);
}

export function getRandomRaceResult() {
    const numbs = [...Array(10).keys()]
        .map(n => getRandomNum())
        .sort((a, b) => a - b);

    const result = numbs.map((num, index) => {
        return {
            sec: index * 5,
            meter: num
        }
    });

    return result
}


export default {};