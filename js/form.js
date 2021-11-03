//находим загруженные изображения
const uploadFile=document.querySelector('#upload-file');
const imageUploadOverlay=document.querySelector('.img-upload__overlay');//форма редактирования изображений
const buttonUploadCancel=document.querySelector('#upload-cancel');//находим кнопку закрытия формы
const body=document.querySelector('body');
const hashtegInput=document.querySelector('.text__hashtags');//находипм хэштеги

const isEscapeKey = (evt) => evt.key === 'Escape';
//выбираем изображение
uploadFile.addEventListener('change', (evt)=> {
  evt.preventDefault();
  imageUploadOverlay.classList.remove('hidden');//отрылась форма редактирования изображения
  body.classList.add('modal-open');
});
//закрытие формы редактирования изображения при нажатии кнопки закрытия формы
buttonUploadCancel.addEventListener('click', (evt)=> {
  evt.preventDefault();
  imageUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
});
//закрытие формы редактирования изображения  при нажатии на ESC
uploadFile.addEventListener('keydown',(evt)=>{
  if(isEscapeKey(evt)){
    evt.preventDefault();
    imageUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    evt.stopPropagation();
  }
});

//массив хэштегов не больше 5 шт
const arrayOfhashtegs=hashtegInput.split('',5);
//проверка хэштегов
//перебираю весь массив хэштегов на проверку валидности  паттерну в разметке /^#[a-z\d-]+$/gi
for (let i=0; i<arrayOfhashtegs.length; i++){
  arrayOfhashtegs[i].addEventListener('invalid',()=>{
    if(arrayOfhashtegs[i].validity){
      arrayOfhashtegs[i].setCustomValidity('Хэштег должен соответствовать правилам');
    }  else{
      arrayOfhashtegs[i].setCustomValidity('');
    }
    arrayOfhashtegs[i].reportValidity();
  });

}
