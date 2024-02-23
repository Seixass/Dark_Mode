let obj = {
 
pessoa: 'victor',
enderecos: [
    {
        estado: 'alagoas',
        cidade: 'maceio',
        rua: 'D',
        numero: 55 
    },

    {
        estado: 'alagoas',
        cidade: 'maceio',
        rua: 'D',
        numero: 55
    },

    {
        estado: 'alagoas',
        cidade: 'maceio',
        rua: 'D',
        numero: 55 
    }

]

}

obj.enderecos.forEach(elemento,indice => {
    console.log(`${indice+1} - ${elemento.rua}`)
});

