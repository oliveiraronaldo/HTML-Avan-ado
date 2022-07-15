//aplicacao dos atributos personalizados no html pelo JS
let lista = document.getElementById("lista");

//colocar data na frente no atributo personalizado para utilizar essa funcao no JS
lista.dataset.num = "50"
let num = parseInt(lista.dataset.num);
console.log(lista.dataset.num)

let conteudo = ""
for (let i = 0; i < num; i++) {
    conteudo += "<li>" + i + "</li>"
    
}

lista.innerHTML = conteudo;