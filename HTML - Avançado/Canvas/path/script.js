let tela = document.getElementById("tela");

//context é o lugar para desenhar
let ctx = tela.getContext("2d");

ctx.beginPath();

ctx.lineWidth = 4;
ctx.strokeStyle = "red";
ctx.moveTo(10,10);
ctx.lineTo(400, 300);
ctx.stroke();


//começ um novo caminho
ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "blue";
ctx.fillStyle = "black"
ctx.moveTo(50,10);
ctx.lineTo(300, 300);
ctx.lineTo(200, 300)
//fecha o caminho
ctx.closePath();
ctx.fill();
ctx.stroke();


