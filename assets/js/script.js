// Configurar la fecha de la boda: Mes (empieza en 0 para Enero, así que Abril es 3), día, año, hora
        // Abril 11, 2026 a las 15:00:00
        const weddingDate = new Date("April 11, 2026 15:00:00").getTime();

        const countdownFunction = setInterval(function () {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            // Cálculos de tiempo
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Mostrar resultados
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // Si la cuenta termina
            if (distance < 0) {
                clearInterval(countdownFunction);
                document.getElementById("countdown").innerHTML = "¡Es hoy!";
            }
        }, 1000);

        // Función para iniciar la música al primer clic
        function iniciarMusica() {
            const audio = document.getElementById('musicaBoda');

            // Intentar reproducir
            audio.play().then(() => {
                // Si tiene éxito, quitamos los eventos para que no se reinicie
                document.removeEventListener('click', iniciarMusica);
                document.removeEventListener('touchstart', iniciarMusica);
                document.removeEventListener('scroll', iniciarMusica);

                // Animación pequeña al icono para indicar que suena
                document.getElementById('icono-nota').classList.add('fa-spin');
            }).catch(error => {
                console.log("El navegador bloqueó el autoplay, esperando interacción...");
            });
        }

        // Escuchar clics, toques en móvil o scroll
        document.addEventListener('click', iniciarMusica);
        document.addEventListener('touchstart', iniciarMusica);
        document.addEventListener('scroll', iniciarMusica, { once: true });