let carro = {
  nome: 'Toyota Supra',
  cor: 'Vermelho',
  preco: 350000,
  estoque: 25
};

// A) Como acessar o nome?
console.log("Nome do carro:", carro.nome); // acesso com ponto

// B) Como acessar preço com colchetes?
console.log("Preço:", carro['preco']); // acesso com colchetes

// C) Atualizar estoque para 80
carro.estoque = 80;
console.log("Estoque atualizado:", carro.estoque); // agora é 80

// D) Imprimir todas propriedades
console.log("Propriedades do objeto:");
for (let chave in carro) {
  console.log(chave + ": " + carro[chave]);
}