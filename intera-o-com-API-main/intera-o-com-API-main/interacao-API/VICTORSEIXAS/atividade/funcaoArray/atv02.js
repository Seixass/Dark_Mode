const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]//mais de 3 letras

const letras = palavras.filter((elemento)=>{
    return elemento.length > 3
})
console.log(letras)