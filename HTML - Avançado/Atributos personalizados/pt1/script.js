let image = document.getElementById("cachorro")

image.addEventListener("click", function(){
    //formas de mudar a imagem ao clicar nela
    //image.src = "./imagens/praia.jpg"
    image.setAttribute("src", "/imagens/praia.jpg") 


    //atraves do set attribute é possivel adicionar atributos que nao sao padroes
    image.setAttribute("cor", "vermelho")
    
})

//aplicacao dos atributos personalizados no html pelo JS
let lista = document.getElementById("lista");
let num = parseInt(lista.getAttribute("num"));

let conteudo = ""
for (let i = 0; i < num; i++) {
    conteudo += "<li>" + i + "</li>"
    
}

lista.innerHTML = conteudo;