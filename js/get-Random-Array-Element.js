import{getRandomPositiveInteger} from './get-random-positive-integer.js';
// функция поиска случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export{getRandomArrayElement};
