// const nomes = ["Ananda", "João", "Adilson", "Carlos", "Arthur", "Beatriz"];
// const nomesComA = nomes.filter(nome => nome.startsWith("A"));
// console.log(nomesComA);

// const nomes = ["Victoria", "Vitor", "Ronilson", "Vedder", "Sara", "Visconde"];

// const NomesComV = nomes.filter(nomes => nomes.startsWith("V"));

// console.log(NomesComV)

//Basicos Find 
//EX01

// const nomes = ["Victoria", "Jose", "Amanda", "Noemi"];

// const UsuarioEncontrado = nomes.find(nome => nome == "Amanda");

// console.log(UsuarioEncontrado);

//EX02

// const listaDeUsuarios = [
// {id: 1, nome: "Ananda" }, 
// {id: 2, nome: "Midori" }, 
// {id: 3, nome: "Geremias" }
// ];

// const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);

// console.log(usuarioEncontrado);


//EXERCICIOS INTERMEDIARIOS FIND


//EX01

// const produtos = [
//     {nome: "Teclado", preco: 120 },
//     {nome: "Fone de ouvido", preco: 80},
//     {nome: "Caderno", preco: 30}
// ];

// const produtoBuscado = produtos.find(produto => produto.id == 40);
// console.log(produtoBuscado);


//EX BASICO MAP

//EX01

// const palavras = ["Ola", "Mundo", "JavaScript"];
// const adicionar = palavras.map(adiciona => adiciona + "!!!!");

// console.log(adicionar);

//EX02

const nomes = ["ana", "bruno", "carla"];
const nomesMaiusculos =  nomes.map(nome => nome + " Colaborador")
console.log(nomesMaiusculos);