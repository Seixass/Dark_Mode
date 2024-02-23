const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce((elemento, indice)=>{
    return indice + elemento
    
})
console.log(soma)