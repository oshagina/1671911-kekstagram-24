import{getRandomPositiveInteger} from './get-random-positive-integer.js';
import{getRandomArrayElement} from './get-Random-Array-Element';

const NAMES = [
  'Иван',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const MESSAGIES =[
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент',
];

const MAX_COMMENTS_FOR_EACH_FOTO = 4;

//функция создания  случайных описаний и имен к одной фото
const createCommentsOneFoto = () => ({
  id:getRandomPositiveInteger(1,300),
  avatar:`img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  message: getRandomArrayElement(MESSAGIES),
  name: getRandomArrayElement(NAMES),
});
createCommentsOneFoto();

//фунция создания  массива определенной длины из случайных комментариев  к фото
const getArrayCommentsEachFoto = Array.from({length: MAX_COMMENTS_FOR_EACH_FOTO}, createCommentsOneFoto);

export{getArrayCommentsEachFoto};
