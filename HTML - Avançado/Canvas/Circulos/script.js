let tela = document.getElementById("tela");

//context é o lugar para desenhar
let ctx = tela.getContext("2d");

let x = 250;
let y = 250;
let raio = 100;
let inicio = 0;
let fim = 1 * Math.PI;

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "blue"

//x e y são coordenadas do centro do circulo
// inicio e fim em radiano
ctx.arc(x, y,raio, inicio, fim);
ctx.fill();
ctx.stroke()
