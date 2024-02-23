let produtos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let quantidades = [3, 1];

function precoTotal(produtos, quantidades){
    return produtos.map((produto, index)=>{
        let precoVenda = produto.preco * quantidades[index]

        return{
            nome: produto.nome,
            preco: produto.preco,
            valorTotal: precoVenda
        }
    })
}

const precoVendaProduto = precoTotal(produtos, quantidades)
console.log(precoVendaProduto)
