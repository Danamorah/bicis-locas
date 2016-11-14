function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password").value;
	var patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var texto = /^[a-zA-Z]*$/;
	var nombre1letra = nombre.charAt(0);
	var apellido1letra = apellido.charAt(0);
	//validar de la a a la z
	if ( nombre.search(texto) || apellido.search(texto) ){
        alert("deben ser caracteres de la a a la z")
	}
	// validar email
	else if(email.search(patronEmail) ){
        alert("no es un email valido")
        return false;
	}
	// validar campos vacios
	else if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
		alert("complete los campos");
		return false;
	}
	else if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ){
        alert("complete los campos");
		return false;     
	}
	else if( email == null || email.length == 0 || /^\s+$/.test(email) ){
        alert("complete los campos");
		return false;     
	}
	else if( pass == null || pass.length == 0 || /^\s+$/.test(pass) ){
        alert("complete los campos");
		return false;     
	}
	// validar largo de password
    else if(pass.length < 6){
        alert("la contraseña debe tener al menos 6 caracteres")
        return false;
    }
    else if(pass == "password" || pass == "123456" || pass == "098754"){
    	alert("la contraseña no puede ser password, 123456 o 098754")
    	return false;
    }
    // validar mayuscula
    else if(nombre.charAt(0) !== nombre1letra.toUpperCase() || apellido.charAt(0) !== apellido1letra.toUpperCase()){
        alert("Para los campos nombre y apellido la primera letra debe ser mayúscula")
    }
    // validar select
    else if(document.getElementsByTagName('select')[0].value == "0"){
    	alert("El valor seleccionado de bicis, debe ser una de las opciones presentadas")
    }
}