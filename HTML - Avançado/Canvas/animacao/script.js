let tela = document.getElementById("tela");

//context é o lugar para desenhar
let ctx = tela.getContext("2d");



let circle = {
    x : 150,
    y : 250,
    raio : 100,
    inicio : 0,
    fim : 0,
    antiHor: true               //faz o desenho ao contrario
}

function drawcircle(c){
    //desenho o backgroud a cada intervalo p apagar o rastro do circulo
    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = "beige";
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue"

    
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHor);
    ctx.fill();
    ctx.stroke()

}

//funcao para ir desenhando cada aos poucos o circulo
setInterval(function(){
    if (circle.fim < 2 * Math.PI) {
       circle.fim += 0.02 
       circle.x += 0.3
       circle.y += 0.3;
       
    }
    drawcircle(circle)
}, 24)

