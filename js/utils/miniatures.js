//массив из сгенерированных случайных объектов, каждый из которых  -
//это полное описание фотографии , опубликованной пользователем с комментариями.
import{getArrayDescriptionsAllFotos} from './array-descriptions-all-fotos.js';

const pictures=getArrayDescriptionsAllFotos();
//находим фрагмент с содержимым темплейта
const pictureTemplateContent=document.querySelector('#picture').content;
//В фрагменте находим  элемент а
const pictureTemplateElement=pictureTemplateContent.querySelector('a');

//создаём "коробочку"
const pictureListFragment=document.createDocumentFragment();

pictures.forEach((url, comments,likes) => {
  const fotoElement=pictureTemplateElement.coneNode(true);// Клонируем элемент со всеми "внутренностями"
  const pictureInfoElement=fotoElement.querySelector('.picture__info');
  fotoElement.querySelector('.picture__img').src=url;
  pictureInfoElement.content.querySelector('.picture__comments').textContent=comments;
  pictureInfoElement.content.querySelector('.picture__likes').textContent=likes;
  pictureListFragment.appendChild(fotoElement);// Складываем созданные элементы в "коробочку"
});
pictures.appendChild(pictureListFragment); // отрисовываем всё из "коробочки"
export{pictures};
