console.log('---------- Sistema de Array ----------');
//Import da biblioteca readline que permite a interacao com o usuario 
var readline = require('readline');
//Import do arquivo de function
//
//Instancia o objeto para criar a interacao com o usuario 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 
//Define uma variavel do tipo array
const listaNomes = ['jose', 'maria', 'carlos'];
const listaProdutos = ['teclado', 'branco', 50.80 , true];
const listaAlunos = ['Carol', 'Milena', 'Heitor', 'Japa', 'Larissa'];
const listaDisciplinas = ['Prgramacao Beck-End', 'Programacao Front-End', 'Banco de Dados', 'Desenvolvimento Mobile']

console.log(listaNomes);
console.log(listaProdutos);
//Verificando o tipo de dados do elemento array
console.log(typeof(listaProdutos));
console.log(typeof(listaProdutos[3]));
//Exibe de acordo  com o indice
console.log(listaProdutos[0]);
//Exibe a quantidade de elementos do array

//Extraindo valores com a estrutura de repeticao 
let qtde = listaAlunos.length;
let cont = 0;

//Exemplo utilizando while 
while (cont < qtde) {
    console.log('O aluno da turma DS2M é' + listaAlunos[cont]);
    cont+=1;
}
//Exemplo utilizando o for 
for (let cont = 0; cont < qtde; cont++) {
    console.log('O aluno da turma DS2M é' + listaAlunos[cont]); 
}
//Exemplo utilizando o foreach
listaAlunos.forEach(function(aluno){
    console.log('O aluno da turma DS2M é' + aluno);
});
//  remove todos os elemnetos a partir do intem escolhido 
//Adicinando elementos novos no array no final 
listaAlunos.push('Arthur', 'Vinicius')
listaAlunos.push('Leonardo')
console.log(listaAlunos);

//Remove o ultimo elemento do array
listaAlunos.pop();

//Adicionar elementos no inicio do array
listaAlunos.unshift('Enzo')
console.log(listaAlunos);

//Remover um elemento do inicio 
listaAlunos.shift();

//Pesquisando valores em um arrray e retornando o seu indice 
//  se retornar -1, significa qu enao foi encontrado o item
let indice = listaAlunos.indexOf('Ana');
console.log(indice);

//Cria uma copia do array em uma nova variavel que sera o array
const listaNovosAlunos = listaAlunos.slice();
console.log(listaNovosAlunos);

//Removendo elementos a partir do indice 
//  remove so o item escolhido
listaAlunos.splice(indice, 1);
//  remove todos os elemnetos a partir do intem escolhido 
listaAlunos.splice(indice)
//  remove todos os itens a partir do primeiro ate o item escolhido 
listaAlunos.splice(0, indice+1)

console.log(listaAlunos);

//Adicionando um array de itens dentro de outro array 
listaNovosAlunos.push(listaDisciplinas);
//lista o array principal e todos os subarrays existente 
console.log(listaNovosAlunos);
//Exibe o primerio elemento do array contido dentro da linha 8 do array principal 
console.log(listaNovosAlunos[8][0]);
//Exemplo de como buscar um elemento de um array que esta dentro de outro array
console.log(listaNovosAlunos[8].indexOf('Banco de Dados'));

