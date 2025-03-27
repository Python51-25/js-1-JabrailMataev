let input=prompt('Введите число')
let number=parseFloat(input)
let i=1
if(isNaN(number)){
    console.log('Error!')
}
for(i=1; i<=10;i++){
console.log( `${number} x ${i} = ${number *i}`)
}