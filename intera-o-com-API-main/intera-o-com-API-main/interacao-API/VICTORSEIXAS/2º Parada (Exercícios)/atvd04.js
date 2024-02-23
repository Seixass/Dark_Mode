let mercadoria = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
  ];
  function precoMinimo(arraydeproduto, valorMinimo){
    return arraydeproduto.filter((produto)=>produto.preco >= valorMinimo)
  }
  const produtoAcimadoMinimo = precoMinimo(mercadoria, 500)
  console.log(produtoAcimadoMinimo)