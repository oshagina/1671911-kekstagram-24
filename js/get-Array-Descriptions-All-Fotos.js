import{getRandomPositiveInteger} from './get-random-positive-integer.js';
import{getRandomArrayElement} from './get-Random-Array-Element';
import{getArrayCommentsEachFoto} from './get-Array-Comments-Each-Foto';

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

const MAX_QUANTITY_FOTOS=25;

//функция по созданию описания каждой фото, опубликованной пользователем
const getCreateDescriptionEachFoto=()=>{
  const i=getRandomPositiveInteger(1,MAX_QUANTITY_FOTOS);
  return{
    id:i,
    url:`photos/${i}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    comments: getArrayCommentsEachFoto,
  };

};

//функция создания массива из 25 сгенерированных объектов, каждый из которых  - это описание фотографии, опубликованной пользователем.
const getArrayDescriptionsAllFotos = Array.from({length: MAX_QUANTITY_FOTOS}, getCreateDescriptionEachFoto);

export{getArrayDescriptionsAllFotos};
