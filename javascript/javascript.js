(function () {
    //reloj
    const hora = document.getElementById("hora");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    function actualizarReloj() {
        let date = new Date;
        if (date.getHours() < 10) {
            hora.textContent = "0" + date.getHours();
        }else{
            hora.textContent = date.getHours();
        }
        if (date.getMinutes() < 10) {
            minutos.textContent = "0" + date.getMinutes();
        }else{
            minutos.textContent = date.getMinutes();
        }
        if (date.getSeconds() < 10) {
            segundos.textContent = "0" + date.getSeconds();
        }else{
            segundos.textContent = date.getSeconds();
        }

    }
    actualizarReloj();
    setInterval(() => {
        actualizarReloj();
    }, 1000);

}());
