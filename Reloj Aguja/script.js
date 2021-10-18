/*
 * Welcome my codigo Javascript
*/

const reloj = ()=> {
	let time = new Date();
	let hours = time.getHours();
	let minun = time.getMinutes();
	let seconds = time.getSeconds();

    let porcentajeHoras;
    
    if (hours >= 12) {
     	porcentajeHoras = hours / 12 * 360;
    }  else {
    	porcentajeHoras = hours / 24 * 360;
    }

    porcentajeHoras += minun / 60 * 30;
    porcentajeMinutos = minun / 60 * 360;
    porcentajeSegundos = seconds / 60 * 360;

    document.getElementById("hours").style.transform = "rotate("+ porcentajeHoras +"deg)";
    document.getElementById("minun").style.transform = "rotate("+ porcentajeMinutos +"deg)";
    document.getElementById("seconds").style.transform = "rotate("+ porcentajeSegundos +"deg)";
}


setInterval(reloj, 1000);