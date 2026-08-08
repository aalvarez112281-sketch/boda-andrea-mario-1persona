/* =========================================
   ANDREA & MARIO
   Funciones de la invitación
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CUENTA REGRESIVA
    ========================= */

    const fechaBoda = new Date("2026-10-17T17:00:00");

    const diasElemento = document.getElementById("dias");
    const horasElemento = document.getElementById("horas");
    const minutosElemento = document.getElementById("minutos");
    const segundosElemento = document.getElementById("segundos");
    const contadorSeccion = document.getElementById("contador");

    function actualizarCuentaRegresiva() {

        const ahora = new Date();
        const diferencia = fechaBoda - ahora;

        if (diferencia <= 0) {
            contadorSeccion.innerHTML = `
                <h2>¡Hoy es el gran día!</h2>
                <p>Gracias por acompañarnos.</p>
            `;
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        diasElemento.textContent = String(dias).padStart(3,"0");
        horasElemento.textContent = String(horas).padStart(2,"0");
        minutosElemento.textContent = String(minutos).padStart(2,"0");
        segundosElemento.textContent = String(segundos).padStart(2,"0");

    }

    actualizarCuentaRegresiva();
    setInterval(actualizarCuentaRegresiva,1000);

    /* =========================
       BOTÓN ABRIR INVITACIÓN
    ========================= */

    const botonAbrir = document.getElementById("abrirInvitacion");

    if(botonAbrir){

        botonAbrir.addEventListener("click",()=>{

            document.querySelector(".bienvenida").scrollIntoView({
                behavior:"smooth"
            });

        });

    }

    /* =========================
       DATOS BANCARIOS
    ========================= */

    const botonCuenta = document.getElementById("mostrarCuenta");
    const cuenta = document.getElementById("cuenta");

    if(botonCuenta && cuenta){

        botonCuenta.addEventListener("click",()=>{

            const visible = cuenta.style.display==="block";

            cuenta.style.display = visible ? "none":"block";

            botonCuenta.textContent = visible
            ? "Ver datos bancarios"
            : "Ocultar datos bancarios";

        });

    }

    /* =========================
       SPOTIFY
    ========================= */

    const botonSpotify = document.getElementById("mostrarSpotify");
    const spotifyPlayer = document.getElementById("spotifyPlayer");

    if(botonSpotify && spotifyPlayer){

        spotifyPlayer.style.display="none";

        botonSpotify.addEventListener("click",()=>{

            const visible = spotifyPlayer.style.display==="block";

            spotifyPlayer.style.display = visible ? "none":"block";

            botonSpotify.textContent = visible
            ? "🎵 Nuestra canción"
            : "Ocultar canción";

        });

    }

   

});
const sobre = document.querySelector(".sobre");
const sello = document.getElementById("abrirSobre");
const pantallaSobre = document.getElementById("sobreInicial");

if (sobre && sello && pantallaSobre) {
    sello.addEventListener("click", () => {
        sobre.classList.add("abierto");

        setTimeout(() => {
            pantallaSobre.classList.add("ocultar");
        }, 1800);

        setTimeout(() => {
            pantallaSobre.style.display = "none";
        }, 2600);
    });
}