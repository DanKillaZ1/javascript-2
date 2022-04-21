# Operadores

## Aritméticos: retornam o resultado de uma operação
- Soma +
- Subtração -
- Multiplicar *
- Dividir /
- Módulo (resto de divisão) %
- Math: random(), round(), sqrt().

## Comparadores matematicos: teste lógico, retorno booleano (true / false):

    < menor que
    > maior que
    <= menor ou igual
    >= maior ou igual

## Comparadores Lógicos: teste lógico, retorno booleano (true / false)

    == igualdade entre sentenças (valor)
    != diferença entre sentenças (valor)
    === igualdade entre sentenças (valor e tipo)
    !== diferença entre sentenças (valor e tipo)

    A == B = TRUE
    A != B = FALSE

## Operadores de lógica e junção lógica

    !  NÃO (NOT)
    && E (AND)
    || OU (OR)

O sinal de exclamção (!) é o operador NOT (não), utiliazndo para negar a sentença que vem na sequência.

#### Exemplos:

a != b  // o valor de A é diferente de b    
x !=== Y o valor e o tipo de X são diferentes de y

#### As condições lógicas são convertidas em números binarios:

true e equivalente a 1  
false e equivalente a 0

#### Operador lógico de atribuição

Tem a campacidade de atribuir valor a uma variavel a partir de uma condiçao lógica, economiza IFs

Exemplo:

var meuCarro = cor == "preto" ? "preto" : "branco"

## IF
if (...){
    ...
}

## Else
else {

}
if (cor == "preto"){
    meuCarro = "preto";
} else {
    meuCarro = "cinza";
}
* Exemplo

if (cor == "preto"){
    meuCarro = "preto";
} else if (cor == "vermelho"){
    meuCarro = "cinza";
} else if (cor == "amarelo"){
    meuCarro = "branco";
} else {
    meuCarro = "azul";
}

## Switch

switch (cor) {
    case 'branco' :
        meuCarro = 'branco'
        break;
    case 'vermelho' :
        meuCarro = 'vermelho'
        break;
    case 'amarelo' :
        meuCarro = 'amarelo'
        break;
    default :
        console.log('não temos a cor desejada')
}

## media

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 6;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if( media >= 8 ) {
    console.log("Aluno aprovado")

} else {
    console.log("Aluno em recuperaçao")
}

## Laços de Repetição
for ([expressaoInicial]; [condicao]; [incremento])

while( [condicao] ){
    [execucao]
}
var contador 
while( contador < 10){  
    contador++  
}


var km;
var revisao = 3;

for( km = 0; km < revisao; km++ ){
    console.log("apenas " + km + "kms então pode rodar");
}

#### Cálculo de média de alunos

var alunos = [
    [100, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 10, 8, 7],
    [8, 8, 8, 8, 6]
]

var nota = 0;
for (var i = 0; i < alunos.length; i++){

    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + parseInt(i+1));
    console.log ("Notas: " + notasAluno);

    for( c = 0; c < notasAluno.length; c++ ){
        nota += notasAluno[c];

    }
    media = nota / 4;
    if(media >= 7) {
        resultado = "aprovado";
    
    } else {
        resultado = "reprovado";
    }

    console.log("Media: " + media + " - " + resultado );
}

## Funções

- Evitar a repetição de código
- Realizar chamadas dinâmicas de algoritmos

function calcularMedia( notas ){
    var soma = 0;
    for( c = 0; c < notas.length; c++){
    		soma += notas[c];
        
    }
    
    media = soma / notas.length;
    
    return media;
    
    
}
let media;

function aprovacao( notas ) {

  let media = calcularMedia( notas );
	
  let condicao = media >= 8 ? "aprovado" : "reprovado";
  return 'Média: ' + media + ' - Resultado: ' + condicao;
  
  }

//console.log( "Média: " + calcularMedia([8, 10, 7]))
//console.log( aprovacao( calcularMedia([8, 10, 7])))
console.log( aprovacao([8, 8, 7]));

//console.log( "Média: " + calcularMedia([8, 8, 9, 10]))
//console.log( aprovacao( calcularMedia([8, 8, 9, 10])))
console.log( aprovacao([8, 8, 10, 6]));

//console.log( "Média: " + calcularMedia([9, 6]))
//console.log( aprovacao( calcularMedia([9, 6])))
console.log( aprovacao([6, 9]));