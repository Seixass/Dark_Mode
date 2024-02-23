const dobroF = (x) => 2 * x
const triploF = (x) => 2 * x

const resultado = function(param,fun1,fun2){
    const dobro = fun1(param)
    const triplo = fun2(param)
    console.log(`O númermo ${param}, dobro ${dobro},triple ${triplo}`)
}
let valor = Number(prompt("Digite um número: "))
resultado(valor, dobroF, triploF)