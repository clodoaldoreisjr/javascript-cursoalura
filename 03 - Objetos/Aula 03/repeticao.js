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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo != "object" && tipo != "function")
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}