/*function getSum(aaa,bbb){
  const description='Сумма двух чисел равна';
  const sum=aaa+bbb;
  return `${description  } ${ sum}`;
}
getSum(1,2);
*/
const randomInteger = (min, max) => {
  if(min>=0&&max>0&&max>min){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};
randomInteger(1,6);
//Функция для проверки максимальной длины строки
/*function checkWordLength(word, maxLength){
  if (word.length>maxLength){
    return false;
  }
  return true;
}
checkWordLength('Olga',3);
*/

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

const DESCRIPTIONS = [
  'La bella vita',
  'Siamo felici',
  'Punto di partenza',
  'Ricordi felici',
  'Non ti arrendere',
  'Niente male',
  'Saluto a te',
  'Ricordo di te',
];

const MAX_COMMENTS_FOR_EACH_FOTO = 4;
// функция поиска случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[randomInteger(0, elements.length - 1)];
//функция создания  случайных описаний и имен к одной фото
const createCommentsOneFoto = () => {
  return {
    id:randomInteger(1,300),
    avatar:'img/avatar-'+randomInteger(1,6)+'.svg',
    message: getRandomArrayElement(MESSAGIES),
    name: getRandomArrayElement(NAMES),
  };
};
createCommentsOneFoto();

//фунция создания  массива определенной длины из случайных комментариев  к фото
const getArrayCommentsEachFoto = Array.from({length: MAX_COMMENTS_FOR_EACH_FOTO}, createCommentsOneFoto);

getArrayCommentsEachFoto;

const MAX_QUANTITY_FOTOS=25;

//функция по созданию описания каждой фото, опубликованной пользователем
const createDescriptionEachFoto=()=>{
  const i=randomInteger(1,MAX_QUANTITY_FOTOS);
  return{
    id:i,
    url:'photos/'+i+'.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    comments: getArrayCommentsEachFoto,
  };

};

//функция создания массива из 25 сгенерированных объектов, каждый из которых  - это описание фотографии, опубликованной пользователем.
const getArrayDescriptionsAllFotos = Array.from({length: MAX_QUANTITY_FOTOS}, createDescriptionEachFoto);

getArrayDescriptionsAllFotos;

