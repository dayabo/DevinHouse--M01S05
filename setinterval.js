function hora (){
    let horario = new Date();
    let hr = horario.getHours();
    let min = horario.getMinutes();
    let sec = horario.getSeconds();

    if (hr.toString().length == 1) hr = "0"+ hr;
    if (min.toString().length == 1) min = "0"+ min;
    if (sec.toString().length == 1) sec = "0"+ sec;

    let horas = `São: ${hr}:${min}:${sec}`;

   return console.log(horas)
}



function exibirhora(){
    return setInterval(()=> hora() , 2000)
}


exibirhora()
