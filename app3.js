let input=prompt('Введитие число:')
let number=parseFloat(input)
if(isNaN(number)|| number < 1){
    console.log('Error!')
}else{
    let sum=0
for(let i=1;i <=number;i++){
    if(i % 2==0){
        sum+= i
    }
}
console.log(`${number}: ${sum}`)
}