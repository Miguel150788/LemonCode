
import { getAvg } from './averageService';
import "./mystyles.scss";
import imagen from "./content/logo_1.png";

const messageToDisplay = `Hola Mundo`;

document.getElementById("content").innerHTML = messageToDisplay;
const img = document.createElement("img");
img.src = imagen;
document.getElementById("imgContainer").appendChild(img);

