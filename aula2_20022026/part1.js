let carros = [
  'Ferrari', 'BMW', 'Audi', 'Mercedes', 'Toyota',
  'Honda', 'Hyundai', 'Kia', 'Chevrolet', 'Ford',
  'Nissan', 'Volkswagen', 'Jeep', 'Porsche', 'Lamborghini',
  'Peugeot', 'Renault', 'Fiat', 'Volvo', 'Mazda',
  'Subaru'
];

// A) Elementos nas posições pedidas
console.log("Posição 0:", carros[0]);      // Ferrari
console.log("Posição 7:", carros[7]);      // Kia
console.log("Posição 11:", carros[11]);    // Volkswagen
console.log("Posição 15:", carros[15]);    // Peugeot
console.log("Posição 18:", carros[18]);    // Volvo
console.log("Posição 20:", carros[20]);    // Subaru

// B) Penúltimo e último
console.log("Penúltimo:", carros[carros.length - 2]); // Mazda
console.log("Último:", carros[carros.length - 1]);    // Subaru

// C) Quantidade de elementos
console.log("Total de carros:", carros.length); // 21

// D) Adicionar novo elemento
carros.push("Bugatti");
console.log("Novo último:", carros[carros.length - 1]); // Bugatti

// E) Imprimir todos com for
console.log("Lista completa:");
for (let i = 0; i < carros.length; i++) {
  console.log(carros[i]);
}



