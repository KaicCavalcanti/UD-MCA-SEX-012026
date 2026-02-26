let Papelaria = [
  {nome:'lapis', preco:1.00, estoque:200},
  {nome:'Caneta', preco:1.50, estoque:100},
  {nome:'Borracha', preco:1.00, estoque:100},
  {nome:'Apontador', preco:2.00, estoque:50},
  {nome:'Tesoura', preco:5.00, estoque:10},
  {nome:'Lapiseira', preco:10.00, estoque:10},
  {nome:'Grafite', preco:2.00, estoque:50},
  {nome:'Caderno', preco:10.00, estoque:20},
  {nome:'Estojo', preco:5.00, estoque:30},
  {nome:'Mochila', preco:5.00, estoque:5}
]

//A.
//Qual é o preço do segundo objeto?
Papelaria[1].nome
//'Borracha'

//B. 
//Qual é o nome do terceiro objeto?
Papelaria[2].nome
//'Apontador'

//C.
//Quantos itens existem no array?
Papelaria.length
//10

//D.
//Imprima o nome de todos os objetos
for(let i = 0; i < Papelaria.length; i++) {
  console.log(Papelaria[i].nome)
}


//E.
//Some o total de estoque de todos os objetos
total = 0
for(let i = 0; i < Papelaria.length; i++) {
  total = total + Papelaria[i].estoque
}

//F.
//Qual objeto possui maior estoque?
(Papelaria[0].estoque > Papelaria[1].estoque) ? Papelaria[0].nome : (Papelaria[1].estoque > Papelaria[2].estoque) ? Papelaria[1].nome : (Papelaria[2].estoque > Papelaria[3].estoque) ? Papelaria[2].nome : 
(Papelaria[3].estoque > Papelaria[4].estoque) ? Papelaria[3].nome :
(Papelaria[4].estoque > Papelaria[5].estoque) ? Papelaria[4].nome :
(Papelaria[5].estoque > Papelaria[6].estoque) ? Papelaria[5].nome :
(Papelaria[6].estoque > Papelaria[7].estoque) ? Papelaria[6].nome :
(Papelaria[7].estoque > Papelaria[8].estoque) ? Papelaria[7].nome :
(Papelaria[8].estoque > Papelaria[9].estoque) ? Papelaria[8].nome : Papelaria[9].estoque
