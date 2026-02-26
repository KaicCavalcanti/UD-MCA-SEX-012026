let Labubu = {
  nome:'Labubu Azul',
  cor:'azul',
  preco:'100',
  estoque:'5'
}

//A.
//Como acessar o nome do objeto?
Labubu.nome
//Labubu Azul

//B.
//Como acessar o preço usando colchetes?
Labubu['preco']
//'100'

//C. 
//Atualize o estoque para 80
Labubu.estoque = '80'
//'80'

//D.
//Imprima todas as propriedades no console
console.log(Labubu)
/*{
  nome: 'Labubu Azul',
  cor: 'azul',
  preco: '100',
  estoque: '80'
}*/