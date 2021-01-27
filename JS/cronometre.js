window.onload = function() {
    pantalla = document.getElementById("screen");
 }
 var isMarch = false; 
 var acumularTime = 0; 
 function start () {
          if (isMarch == false) { 
             timeInicial = new Date();
             control = setInterval(cronometro,10);
             isMarch = true;
             }
          }
 function cronometro () { 
          timeActual = new Date();
          acumularTime = timeActual - timeInicial;
          acumularTime2 = new Date();
          acumularTime2.setTime(acumularTime); 
          cc = Math.round(acumularTime2.getMilliseconds()/10);
          ss = acumularTime2.getSeconds();
          mm = acumularTime2.getMinutes();
          hh = acumularTime2.getHours()-18;
          if (cc < 10) {cc = "0"+cc;}
          if (ss < 10) {ss = "0"+ss;} 
          if (mm < 10) {mm = "0"+mm;}
          pantalla.innerHTML = mm+" : "+ss+" : "+cc;
          }
 
 function reset () {
          if (isMarch == true) {
             clearInterval(control);
             isMarch = false;
             }
          acumularTime = 0;
          pantalla.innerHTML = "00 : 00 : 00";
          }