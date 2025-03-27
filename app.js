const grade = prompt("Введите ваш(и) Балл(ы):")
const score = parseFloat(grade)
if (isNaN(score)|| score < 0|| score >100){
console.log('Ошибка!')
alert('Ошибка!')
}else{
}

let letter;

if(score >=90){
letter='A'
}else if(score >=80){
letter='B'
}else if(score >=70){
letter='C'
}else if(score >=60){
    letter='D'
}else{
    letter='F'
}

console.log(`Ваша оценка: ${letter}`);
