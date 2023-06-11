// elementos do html
const senha = document.querySelector(".senha");
const barra = document.querySelector(".tamanho-senha");
const tamanho = document.querySelector('.valor');
const btSenha = document.querySelector(".gerar-senha");

// checkbox das letras maisuculas, numeros e simbolos
const maiusculas = document.querySelector("#maiusculas");
const numeros = document.querySelector("#numeros");
const simbolos = document.querySelector("#simbolos");

// todos os valores
const letrasMaiusculas = 'ABCDEFGJIJKLMNOPQRSTUVWXYZ';
const algarismos = '1234567890';
const simbolosEspeciais = '!@#$%&';

// senha normal
let letras = 'abcdefghijklnopqrstuvwxyz';

tamanho.innerHTML = barra.value;

barra.oninput = function() {
    tamanho.innerHTML = this.value;
};

barra.addEventListener("mousemove", function() {
    let x = ((barra.value * 100) / 30);
    let cor = 'linear-gradient(90deg, rgb(25, 25, 112) ' + x + '%, rgb(255, 255, 255) ' + x + '%)';
    barra.style.background = cor;
})

let gerarSenha = function(temMaiusculas, temNumeros, Temsimbolos, qualTamanho) {
    if (temMaiusculas == true){
        letras += letrasMaiusculas
    }
    if (temNumeros == true){
        letras += algarismos
    };
    if (Temsimbolos == true){
        letras += simbolosEspeciais
    };

    let senhaTotal = '';

    for(let i = 0; i < qualTamanho; i++) {
        let randomIndex = Math.floor (Math.random() * letras.length);
        senhaTotal += letras[randomIndex];
    };
    senha.value = senhaTotal;
}

btSenha.addEventListener("click", function(){
    gerarSenha(maiusculas.checked, numeros.checked, simbolos.checked, barra.value);
    letras = 'abcdefghijklnopqrstuvwxyz';
})


