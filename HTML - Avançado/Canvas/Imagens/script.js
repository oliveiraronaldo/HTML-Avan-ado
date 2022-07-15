let tela = document.getElementById("tela");

//context é o lugar para desenhar
let ctx = tela.getContext("2d");

//cria a imagem direto pelo JS sem precisar colocar no HTML
let img = new Image;
img.src = "./imagens/cachorro.jpg";
//adiciona um evento a imagem
img.onload = desenharImg;

function desenharImg(){
    ctx.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2);
}

