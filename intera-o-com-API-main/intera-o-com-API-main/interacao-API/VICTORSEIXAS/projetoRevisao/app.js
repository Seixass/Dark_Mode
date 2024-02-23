const inNumero = document.querySelector('#inNumero')
const outTabuada = document.querySelector('#outTabuada')
const btnMostrar = document.querySelector('#btnMostrar')

btnMostrar.addEventListener('click', ()=>{
    let numero = Number(inNumero.value)
    
    if(numero === 0 || isNaN(numero)){
        alert('Digite um número válido')
        inNumero.focus();
        return
    }
    let resposta= ''
    for(let i = 1; i<= 10; i++){
        resposta = `${resposta+numero} x ${i} = ${numero*i}`
    }
    outTabuada.innerHTML = `${resposta}`

})