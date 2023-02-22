function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComdesconto = livros.map(livros => {
        return {...livros ,preco: livros.preco - (livros.preco * desconto)}
    })
    return livrosComdesconto
}