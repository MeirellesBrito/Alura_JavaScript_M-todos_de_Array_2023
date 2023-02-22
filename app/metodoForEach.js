function exibirOsLivrosNaTela(listaDeLivros){
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livros => {
        // let disponibilidade = verificarDisponibilidadeDolivro(livros)
        let disponibilidade = livros.quantidade > 0 ? 'livro__imagens' : "livro__imagens indisponivel"
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livros.imagem}" alt="${livros.alt}" />
      <h2 class="livro__titulo">
        ${livros.titulo}
      </h2>
      <p class="livro__descricao">${livros.autor}</p>
      <p class="livro__preco" id="preco">${livros.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livros.categoria}/span>
      </div>
    </div>
    `
    })
}

// function verificarDisponibilidadeDolivro(livros) {
//   if (livros.quantidade > 0 ){
//     return "livro__imagens"
//   }else{
//     return "livro__imagens indisponivel"
//   }
// }