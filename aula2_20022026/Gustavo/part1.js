let Animais = ['Macaco','Dinossauro','Atum','Galinha','Leão','Garça','Orangotango','Coala','Urso Polar','Tigre','Lagartixa','Gato','Cachorro','Cavalo','Formiga','Pterodactilo','Morcego','Coelho','Jacaré','Periquito','Tartaruga']

//A. 
// Elemento que está na posição (0,7,11,15,18,20)
console.log(Animais[0] + ", " + Animais[7] + ", " + Animais[11] + ", " + Animais[15] + ", " + Animais[18] + ", " + Animais[20])
//Macaco, Coala, Gato, Pterodactilo, Jacaré, Tartaruga

//B. 
// Qual elemento está na penúltima e última posição?
console.log(Animais[19] + " e " + Animais[20])
//Periquito e Tartaruga

//C. 
// Quantos elementos existem no array?
console.log(Animais.length)
//21

//D. 
// Adicione um novo elemento ao final do Array
Animais.push("Bode")
Animais
//'Macaco', 'Dinossauro', 'Atum', 'Galinha', 'Leão', 'Garça', 'Orangotango', 'Coala', 'Urso Polar', 'Tigre', 'Lagartixa', 'Gato', 'Cachorro', 'Cavalo', 'Formiga', 'Pterodactilo', 'Morcego', 'Coelho', 'Jacaré', 'Periquito', 'Tartaruga', 'Bode'

//E. 
// Imprima todos os elementos usando um for.
for (let i = 0; i < Animais.length; i++) {
  console.log(Animais[i])
}
/*'Macaco'
'Dinossauro'
'Atum'
'Galinha'
'Leão'
'Garça'
'Orangotango'
'Coala'
'Urso Polar'
'Tigre'
'Lagartixa'
'Gato'
'Cachorro'
'Cavalo'
'Formiga'
'Pterodactilo'
'Morcego'
'Coelho'
'Jacaré'
'Periquito'
'Tartaruga'
'Bode'*/