const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
const array1 = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]

//Listar 
// array.forEach((elemento, indice,array) => {
//     console.log(`${indice} - ${elemento}`)
// })

// const listarDados = (elemento) => console.log(elemento)
// array.forEach(listarDados)


//MAP
// debugger
// array.map((elemento)=>{console.log(elemento * 3)})
// const listaMap = (elemento) => console.log(elemento)
// array1.map(listaMap)


//FiND

const maiorque30 = array.find((elemento)=>{
    return elemento > 30
})
console.log(maiorque30)

const maiorque31 = array.filter((elemento)=>{
    return elemento > 30
})
console.log(maiorque31)