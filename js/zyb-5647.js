// const liElement = document.getElementsByTagName("li") //utiliza de uma coleção de objetos no geral, utilizando do seu nome e não do seu id/sua identificação

// // for (let index = 0; index < liElement.length; index++) {
// //     console.log(liElement[index].textContent)
// // }

// //console.log(liElement.length)

// //Declaração de Arrays
// let num1 = [1,2,3,4,5];
// let num2 = [6,7,8,9,10];
// let num3 = [num1,num2];

// console.log(`Array-1 ${num1}`);
// console.log(`Array-2 ${num2}`);
// console.log(`Array-3 ${num3}`);

// //Listando um Array! Técnica especial
// // num3.forEach((itemDoArray)=>{
// //     console.log(`Array-3 sendo listado ${itemDoArray}`);
// // })

//______________________________________________________________________________18/04/2023
// //Listando um Array com MAP
// num3.map((numero,key)=>{
    
//     console.log(`${key + 1} - Itens do Array - ${numero}`);
//     numero.forEach((digitos)=>{
//         console.log(digitos);
//     })
// })

// const liElement = document.getElementsByTagName("li") //utiliza de uma coleção de objetos no geral, utilizando do seu nome e não do seu id/sua identificação

// //Declaração de Arrays
// let num1 = [1,2,3,4,5];
// let num2 = [6,7,8,9,10];
// //Espalhar o Array com o SPREAD > AGORA OS OUTROS ARRAYS ESTÃO DESTRIBUÍDOS AQUI DENTRO, NÃO ESTÃO APENAS SENDO JOGADOS AQUI
// let num3 = [...num1,...num2];

// console.log(`Array-1 ${num1}`);
// console.log(`Array-2 ${num2}`);
// console.log(`Array-3 ${num3}`);

// // num3.forEach((itemDoArray)=>{
// //      console.log(`Array-3 sendo listado ${itemDoArray}`);
// //  })

// //Convertendo HTMLCollection em Array de forma indireta
// const liElementHTML = document.getElementsByTagName("li");
// const liElementArray = [...liElementHTML];

// liElementArray.map((item,key)=>{
//     if (item.textContent == "Item-39"){
//         console.log(`${key + 1} - ${item.textContent = "LOCALIZADO"}`);
//     }