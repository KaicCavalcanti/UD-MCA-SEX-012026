let carrosEstoque = [
  { nome: 'Ferrari', preco: 2000000, estoque: 3 },
  { nome: 'BMW', preco: 300000, estoque: 10 },
  { nome: 'Audi', preco: 280000, estoque: 8 },
  { nome: 'Mercedes', preco: 350000, estoque: 6 },
  { nome: 'Toyota', preco: 150000, estoque: 20 },
  { nome: 'Honda', preco: 140000, estoque: 18 },
  { nome: 'Hyundai', preco: 120000, estoque: 25 },
  { nome: 'Ford', preco: 130000, estoque: 15 },
  { nome: 'Jeep', preco: 220000, estoque: 9 },
  { nome: 'Porsche', preco: 900000, estoque: 4 }
];

// A) Preço do segundo objeto
console.log("Preço do segundo:", carrosEstoque[1].preco); // 300000

// B) Nome do terceiro objeto
console.log("Nome do terceiro:", carrosEstoque[2].nome); // Audi

// C) Quantos itens existem
console.log("Quantidade de objetos:", carrosEstoque.length); // 10

// D) Imprimir nome de todos
console.log("Nomes dos carros:");
for (let i = 0; i < carrosEstoque.length; i++) {
  console.log(carrosEstoque[i].nome);
}

// E) Somar estoque total
let totalEstoque = 0;
for (let i = 0; i < carrosEstoque.length; i++) {
  totalEstoque += carrosEstoque[i].estoque;
}
console.log("Estoque total:", totalEstoque); // soma geral

// F) Objeto com maior estoque
let maior = carrosEstoque[0];

for (let i = 1; i < carrosEstoque.length; i++) {
  if (carrosEstoque[i].estoque > maior.estoque) {
    maior = carrosEstoque[i];
  }
}

console.log("Carro com maior estoque:", maior);
// resposta: Hyundai (25 unidades)