let video = document.getElementById("video");

function retroceder() {
  video.currentTime -= 1;
}
function avancar() {
  video.currentTime += 1;
}
function diminuir() {
  video.playbackRate -= 0.1;
}
function acelerar() {
  video.playbackRate += 0.1;
}
function play() {
  video.play();
}
function stop() {
  video.pause();
  video.currentTime = 0;
}

function mouseon() {
  let controle = document.getElementsByClassName("controle")[0];
  controle.style.visibility = "visible"
}
function mouseoff(){
    let controle = document.getElementsByClassName("controle")[0];
    controle.style.visibility = "hidden"
}
