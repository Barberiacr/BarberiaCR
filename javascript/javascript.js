(function () {
    //reloj
    const hora =document.getElementById("hora");
    const minutos =document.getElementById("minutos");

    function actualizarReloj(){
        let date=new Date;
        hora.textContent=date.getHours();
        minutos.textContent=date.getMinutes();
    }
    actualizarReloj();
    setInterval(() => {
        actualizarReloj();
    }, 60000);
    
}());
