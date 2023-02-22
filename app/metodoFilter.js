const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livros => livros.quantidade > 0 > 0 ) : livros.filter(livros => livros.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
} 