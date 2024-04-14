function mostrarRespuesta() {
    const problema = document.getElementById("problema").value;
    const respuesta = document.getElementById("respuesta");

    switch (problema) {
        case "1":
            respuesta.innerHTML = "Tu solución es: Entrena un grupo de ardillas especializadas en encontrar objetos.";
            break;
        case "2":
            respuesta.innerHTML = "Tu solución es: Instala una pantalla gigante en la parte trasera de tu automóvil y organiza competencias de dibujo entre conductores cercanos para entretenerse mientras esperan.";
            break;
        case "3":
            respuesta.innerHTML = "Tu solución es: Crea un sistema de imanes en el techo sobre tu cama para que puedas pegar tus objetos a él antes de dormir y no se caigan durante la noche.";
            break;
        case "4":
            respuesta.innerHTML =  "Entrena a un loro para que grite frases motivacionales en tu oído cada vez que suene la alarma"
            break;
        case "5":
            respuesta.innerHTML = "Pinta tu automóvil con pintura fosforescente para que brille en la oscuridad y sea fácil de encontrar, incluso en los estacionamientos más oscuros"
            break;
        case "6":
            respuesta.innerHTML = "Instala un dispositivo que, al detectar que te quedas dormido, active un mecanismo que te lance suavemente al aire para despertarte" 
            break;
        case "7":
            respuesta.innerHTML = "Instala un dispensador de papel higiénico con un sensor de peso que active una alerta en tu teléfono cuando esté a punto de quedarse vacío";
            break;
        default:
            respuesta.innerHTML = "";
            break;
    }
}