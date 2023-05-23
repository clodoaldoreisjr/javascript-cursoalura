const nomes = ["Evaldo", "Mari", "Camis"];

//1 forma
nomes.forEach(function(nome) {
    console.log(nome)
})

//2 forma
nomes.forEach((nome) => {
    console.log(nome)
})

//3 forma
function imprimeNome(nome) {
    console.log(nome)
}
nomes.forEach(imprimeNome);