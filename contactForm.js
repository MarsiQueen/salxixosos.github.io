function validacion() {

    let formatoCorreo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    elemento1 = document.getElementById("fullname").value.trim();

    elemento2 = document.getElementById("email").value.trim();

    elemento3 = document.getElementById("phone").value.trim();

    /*let elemento3 = document.getElementById('l2name').value.trim();*/


   if(elemento1 == null || elemento1.length == 0 || elemento1.length < 4 || /^\s+$/.test(elemento1)) {
     // Si no se cumple la condicion...
     alert('[ERROR] Incorrect Name Format ');
     return false;
   }

    if (elemento2 == null || elemento2.length == 0) {
     // Si no se cumple la condicion...
     alert('[ERROR] Incorrect Email');
     return false;
   }

   if (!formatoCorreo.test(elemento2)){
    // Si el formato es incorrecto detener
    alert("[ERROR] Incorrect Email Format"); 
    return false;
  }
  if(elemento3.length != 9 || elemento3.length == 0 || elemento3 !== Integer){
    alert("[ERROR] Incorrect Phone Number")
    return false
  }

   return true;
   
 }
 
 