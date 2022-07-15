let tela = document.getElementById("tela");

//context é o lugar para desenhar
let ctx = tela.getContext("2d");

//cria o retangulo preenchido 
ctx.fillStyle = "blue"
ctx.fillRect(10, 10, 100, 200)


//cria o retangulo somente com as bordas
ctx.strokeStyle = "red"
ctx.strokeRect(120, 10, 100, 200)

//cria o retangulo com bordas e preenchido
ctx.rect(240, 10, 100, 200)
ctx.lineWidth = 5
ctx.fill();
ctx.stroke()

ctx.clearRect(20, 20, 50, 50)
