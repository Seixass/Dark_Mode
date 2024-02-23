let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];


function combinar(produtos, precos){
    return produtos.map((produto)=>{
        let precoProduto = precos.find((preco)=>preco.nome === produto.nome)
        return{
            nome: produto.nome,
            categoria: produto.categoria,
            preco: precoProduto.preco,
        }
    })
}
const combinaProduto = combinar(produtos, precos)
console.log(combinaProduto)

function buscarPorCategoria(arraydeproduto, categoria){
    return arraydeproduto.filter((produto) => produto.categoria === categoria);

}
const categoriaproduto = buscarPorCategoria(combinaProduto, "Roupas")
console.log(categoriaproduto)