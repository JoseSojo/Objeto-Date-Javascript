const reloj = document.getElementById("reloj");
const crono = document.getElementById("cronometro");

const eventCrono = document.getElementById("cronometro__num");
const cronoIni = document.getElementById("cronometro__iniciar");
const cronoDet = document.getElementById("cronometro__detener");
cronoDet.style.display = 'none';
const actuHora = ()=>{
    const time = new Date();
    h = inserCero(time.getHours());
    m = inserCero(time.getMinutes());
    s = inserCero(time.getSeconds());

    reloj.textContent = `${h}:${m}:${s}`;
}
const inserCero = (date) => {
    if(date.toString().length < 2) return "0" + date;
    return date;
}
const efecto = ()=>{
    let red = Math.floor(Math.random()*414);
    let green = Math.floor(Math.random()*9459245);
    let blue = Math.floor(Math.random()*2234);
    
    rgb = `rgb(${red},${green},${blue})`;
    let valorBorder = `3px solid ${rgb}`;

    eventCrono.style.border = valorBorder;
    reloj.style.border = valorBorder;
    credito.style.background = `linear-gradient(to top, transparent , ${rgb})`
}

cronoIni.addEventListener('click',()=>{
    cronoIni.style.display = 'none';
    cronoDet.style.display = 'flex';
    let h = 0;
    let m = 0;
    let s = 0;
    let timeText = inserCero(h) + ':' +  inserCero(m) + ':' +  inserCero(s); 
    eventCrono.textContent = timeText;
    let interval = setInterval(()=>{
        s++;
        if (s >= 60) {
            s = 0;
            m++;
        }
        if (m >= 60) {
            m = 0
            h++
        }
        timeText = inserCero(h) + ':' +  inserCero(m) + ':' +  inserCero(s);
        eventCrono.textContent = timeText;
    },1000)
    cronoDet.addEventListener('click',()=>{
        clearInterval(interval);
        cronoDet.style.display = 'none';
        cronoIni.style.display = 'flex';
        console.log('terminado intervalo');
    })
})

efecto();
actuHora();

setInterval(()=>{
    efecto();
    actuHora();
},1000)