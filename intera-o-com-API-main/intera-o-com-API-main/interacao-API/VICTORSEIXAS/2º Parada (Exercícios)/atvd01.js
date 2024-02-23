let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];

function CombinarProdutoPreco(produtos,precos){
    return produtos.map((produtos)=>{
        //encontrar o objeto conrrespondente do array de preços.
        let precoProduto = precos.find((precos)=>precos.nome === produtos.nome);
        return {
            nome:produtos.nome, 
            categoria: produtos.categoria,
            preco: precoProduto.preco,
        };
    });
}
const combinarProduto = CombinarProdutoPreco(produtos, precos)
console.log(combinarProduto)