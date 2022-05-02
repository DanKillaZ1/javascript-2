function calcularMedia( notas ){

    let soma = 0;
    for( c = 0; c < notas.length; c++){

        soma += notas[c];
    }


media = soma / notas.length;

return media;


}
let media; //escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); //escopo da função
    
    let condicao = media >= 8 ? "aprovado" : "reprovado";
    return 'Média: ' + media + ' - Resultado: ' + condicao;

}

// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)

    contagemRegressiva(proximoNumero);
}

//contagemRegressiva(10);


// formulario de envio de dados para calculo da media

const formulario1 = document.getElementById('formulario-01')

if(formulario1)


formulario1.document.getElementById('formulario-01').addEventListener('submit', function( evento){

    evento.preventDefault();
    evento.stopPropagation();

    if(this.getAttribute('class').match(/erro/)){
        return false;
    }

    let dados = new FormData(this);

    let notas = [];

    for (let key of dados.keys()) {


        let numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) :0; //E um nuimero e pode usar o (.)

        if(!isNaN(numero)) {
            notas.push(numero);
        }        

        
    }

    console.log(notas);
    

    texto = aprovacao(notas);

    document.getElementById('resultado').innerHTML = texto;   

});



function validaCampo(elemento){
    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }else {
            document.querySelector('.mensagem').innerHTML = "",
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        }

    });
}

function validaCampoNumerico(elemento){
    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

        

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && this.value <= 10){
            document.querySelector('.mensagem').innerHTML = "",
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

           
        }else {
            
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });
}

function validaEmail (elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

              
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]?$/i
        if(this.value.match(/@/) && this.value.match(/./)){
            document.querySelector('.mensagem').innerHTML = "",
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

           
        }else {
            
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });
}

function validaUf (elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

              
         
        if(this.value.match(/[ro|ac|am|rr|pq|ap|to|ma|pi|ce|rn|pb|pe|al|se|ba|mg|es|rj|sp|pr|sc|rs|ms|mt|go|df|]{2}/i)){
            document.querySelector('.mensagem').innerHTML = "",
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

           
        }else {
            
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });
}



let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');



for ( let emFoco of camposObrigatorios){
    validaCampo(emFoco);

}

for ( let emFoco of camposNumericos){
    validaCampoNumerico(emFoco);

}
for ( let emFoco of camposEmail){
    validaEmail(emFoco);

}
for ( let emFoco of camposUf){
    validaUf(emFoco);

}
