window.onload = function() {
    // Verifica se o áudio foi tocado antes
    if(localStorage.getItem("audioPlaying") === "true") {
        var audio = document.getElementById("audio");
        audio.play();  // Continua a tocar a música
    } else {
        var audio = document.getElementById("audio");
        audio.pause(); // Pausa se não estava tocando
    }

    // Evento de play do áudio
    var audio = document.getElementById("audio");
    audio.onplay = function() {
        localStorage.setItem("audioPlaying", "true");  // Salva que a música está tocando
    };

    // Evento de pause do áudio
    audio.onpause = function() {
        localStorage.setItem("audioPlaying", "false");  // Salva que a música parou
    };
};

