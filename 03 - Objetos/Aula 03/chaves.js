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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. é necessario ter um endereço cadastrado")
};
