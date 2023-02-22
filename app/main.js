let livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLIvrosDAAPI()
const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLIvrosDAAPI(){
    const res = await fetch(endPointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
};













