//para importar scripts dentro de un archivo de javascript usamos la siguiente sintaxis
import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video });

const playButton = document.querySelector("button");
playButton.onclick = () => player.togglePlay();
