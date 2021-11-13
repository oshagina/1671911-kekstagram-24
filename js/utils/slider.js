//редактирование масштаба изображения
const scaleControlElement = document.querySelector('.img-upload__scale');
const buttonScaleControlSmaller=document.querySelector('.scale__control--smaller');
const buttonScaleControlBigger=document.querySelector('.scale__control--bigger');
const scaleControlValue=document.querySelector('.scale__control--value');
const imgUploadPreview=document.querySelector('.img-upload__preview');

noUiSlider.create(scaleControlElement, {
  range: {
    min: 25,
    max: 100,
  },
  start: 100,
  step: 25,
});
scaleControlElement.noUiSlider.on('update',(values,handle)=>{
  scaleControlValue.value=values[handle];
});
buttonScaleControlSmaller.addEventListener('click',()=> {
  scaleControlValue.value-=25;
  const dataScale=(scaleControlValue)/100;
  imgUploadPreview.style=`transform: scale(${dataScale})`;
});
buttonScaleControlBigger.addEventListener('click',()=> {
  scaleControlValue.value+=25;
});

//Наложение эффекта на изображение
//const imgUploadPreview=document.querySelector('.img-upload__preview');
const slider=document.querySelector('.effects__radio');
const effectNoneElement=document.querySelector('#effect-none');
const effectChromeElement=document.querySelector('#effect-chrome');
const effectSepiaElement=document.querySelector('#effect-sepia');
const effectMarvinElement=document.querySelector('#effect-marvin');
const effectPhobosElement=document.querySelector('#effect-phobos');
const effectHeatElement=document.querySelector('#effect-heat');

//При смене эффекта, выбором одного из значений среди радиокнопок .effects__radio,
//добавить картинке внутри .img-upload__preview CSS-класс, соответствующий эффекту.

effectNoneElement.addEventListener('change',()=>{
  slider.noUiSlider.destroy();
});
effectChromeElement.addEventListener('change', ()=> {
  imgUploadPreview.classList.add('.effects__preview--chrome');
  noUiSlider.create(slider,{
    start:1,
    step:0.1,
    range:{
      min:0,
      max:1,
    },
  });
});
effectSepiaElement.addEventListener('change', ()=> {
  imgUploadPreview.classList.add('.effects__preview--sepia');
  noUiSlider.create(slider,{
    start:1,
    step:0.1,
    range:{
      min:0,
      max:1,
    },
  });
});
effectMarvinElement.addEventListener('change', ()=> {
  imgUploadPreview.classList.add('.effects__preview--marvin');
  noUiSlider.create(slider,{
    start:100,
    step:1,
    range:{
      min:0,
      max:100,
    },
  });
});
effectPhobosElement.addEventListener('change', ()=> {
  imgUploadPreview.classList.add('.effects__preview--phobos');
  noUiSlider.create(slider,{
    start:3,
    step:0.1,
    range:{
      min:0,
      max:3,
    },
  });
});
effectHeatElement.addEventListener('change', ()=> {
  imgUploadPreview.classList.add('.effects__preview--heat');
  noUiSlider.create(slider,{
    start:3,
    step:0.1,
    range:{
      min:0,
      max:3,
    },
  });
});
