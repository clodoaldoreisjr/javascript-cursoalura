const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555550","44444440"],
};

cliente.enderecos = [
 {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento:"AP 934",
 },
];

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartamentos);

