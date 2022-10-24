

function evaluarusuario() {

let nombre = prompt("nombre").toLowerCase();

let contrasena = prompt("contraseña");

let contar=0;

if (nombre == "jesus" && contrasena=="001"){
    console.log("Habilitado de pagina Administrador");

    }else if (nombre == "jose" && contrasena=="002"){
        console.log("Habilitado de pagina Supervisor");

      }else if (nombre == "emma" && contrasena=="003"){
        console.log("Habilitado de pagina Operario");


}else if (nombre != "jesus" && nombre !="jose" && nombre !="emma") {
        alert("No existe usuario, intente de nuevo");
        evaluarusuario ();
    
 
}else if (nombre == "jesus" && contrasena !="001") {

        console.log("contraseña erronea");
        contar=1;

        while (contar <= 4) {
        let nombre = prompt("nombre").toLowerCase();
        let contrasena = prompt("contraseña");
        console.log("intento"+ contar);
        contar++;

        if (nombre == "jesus" && contrasena=="001"){
            console.log("Habilitado de pagina Administrador");
            break;
        }    

        if (contar==3){
            alert("usted a intentado " + contar + " intentos, queda sin permisos");
            break;}
        }
    } 

    else if (nombre == "jose" && contrasena !="002") {

        console.log("contraseña erronea");
        contar=1;

        while (contar <= 4) {
        let nombre = prompt("nombre").toLowerCase();
        let contrasena = prompt("contraseña");
        console.log("intento"+ contar);
        contar++;

        if (nombre == "jose" && contrasena=="002"){
            console.log("Habilitado de pagina Supervisor");
            break;
        }    

        if (contar==3){
            alert("usted a intentado " + contar + " intentos, queda sin permisos");
            break;}
        }
    } else if (nombre == "emma" && contrasena !="003") {

        console.log("contraseña erronea");
        contar=1;

        while (contar <= 4) {
        let nombre = prompt("nombre").toLowerCase();
        let contrasena = prompt("contraseña");
        console.log("intento"+ contar);
        contar++;

        if (nombre == "emma" && contrasena=="003"){
            console.log("Habilitado de pagina operario");
            break;
        }    

        if (contar==3){
            alert("usted a intentado " + contar + " intentos, queda sin permisos");
            break;}
        }
    } 


        
else{
console.log("ok");
}
}

evaluarusuario();
