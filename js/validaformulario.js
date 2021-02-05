function validar(formulario){
    if(formulario.nombre.value.length <5){
        alert("Escriba por lo menos 5 caracteres en el campo de nombre");
        formulario.nombre.focus();
        return false;
        
    }
    

}