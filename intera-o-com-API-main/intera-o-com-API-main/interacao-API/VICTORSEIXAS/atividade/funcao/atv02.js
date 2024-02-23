// Faça uma função que receba um único valor representado em segundos. Essa função deverá convertê-lo para horas, minutos e segundos. 
const minutos = (x) => x / 60
const hora = (x) => x / 3600

const horario = function(param,fun1,fun2){
    const m= fun1(param)
    const triplo = fun2(param)
    console.log(`segundos ${param}, minutos${dobro},hora ${triplo}`)
}

console.log(horario(7200))