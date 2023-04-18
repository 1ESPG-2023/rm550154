// const liElement = document.getElementsByTagName("li");

// for (let index = 0; index < liElement.length ; index++) {
//     console.log(liElement[index].textContent)
    
// }
// console.log(liElement.length);

//Declaração de Arrays
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// let nr3 = [nr1,nr2]

// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);

//Listando um array! Técnica Especial!
// nr3.forEach((ItemDoArray)=>{
//     console.log(`Array-3 sendo listado ${ItemDoArray}`);
// })

// Listando o Array com MAP
// nr3.map((numero,key)=>{
//     console.log(`${key+1} - Itens do array - ${numero}`);
//     numero.forEach((digitos)=>{
//         console.log(digitos)
//     })
// })

//Declaração de Arrays para uso do SPREAD
let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
// Espalhar o array com SPREAD [ ... ]
let nr3 = [...nr1,...nr2]

console.log(`Array-1 ${nr1}`);
console.log(`Array-2 ${nr2}`);
console.log(`Array-3 ${nr3}`);

nr3.map((numero,key)=>{
     console.log(`${key+1} - Itens do array - ${numero}`);
})

// Convertendo HTMLCollection em Array de forma indireta
const liElementHtml = document.getElementsByTagName("li");
const liElementArray = [...liElementHtml];

liElementArray.map((item,key)=>{
    console.log(`${key+1} - Itens do li - ${item.textContent}`);
})