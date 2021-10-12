function getSum(aaa,bbb){
  const description='Сумма двух чисел равна';
  const sum=aaa+bbb;
  return `${description  } ${ sum}`;
}
getSum(1,2);

const randomInteger = (min, max) => {
  if(min>=0&&max>0&&max>min){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

};
randomInteger(5,10);

randomInteger(10,20);

//Функция для проверки максимальной длины строки
function checkWordLength(word, maxLength){
  if (word.length>maxLength){
    return false;
  }
  return true;
}
checkWordLength('Olga',3);
