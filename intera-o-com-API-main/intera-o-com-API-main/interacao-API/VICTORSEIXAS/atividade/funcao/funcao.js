//exemplo 01

// function soma(a,b){
// const soma =  a + b
// if(soma > 5){
//     console.log(`valor não permitido ${soma}`)
// }else{
//     return soma
// }
// }

// console.log(soma(2,2))//ok
// console.log(soma(2))//NaN
// console.log(soma())//NaN
// console.log(soma(2,2,2,2,2,2,2,2,2,6))//Ok,pega os 2 primeiros//
// console.log(soma(2,2)+8)//Ok,pega a funcao e soma//

//exemplo02

// function multiplicacao() {
//     let multi = 1
//     for(i in arguments){
//         multi *= arguments[i]
//     }
//     return multi
// }
// console.log(multiplicacao(5,5))

//Exemplo 03

// triplo = (a) => 3 * a;
// console.log(triplo(3))

// oi = _ => 'oi, bisonhos!'
// console.log(oi())

const soma = function(x,y){
    return x + y
}

const resultado = function(a,b, operacao = soma){
    console.log(operacao(a,b))
}

resultado(2,2, function(x,y){
    return x*y
})

resultado(3,3, (x,y)=> x / y)