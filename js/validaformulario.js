function validar(formulario){

    //function nombre_funcion(argumentos)

    //se puede utilizar toda la POO, sentencias de control, bucles, 
    //condiciones, parametros, palabras reservadas para el manejo de array, listas, etc 

    //valide que el nombre sea mayor a 5 caracteres
    if(formulario.nombre.value.length < 5){

        alert("Escriba por lo menos 5 caracteres en el campo de nombre");
        formulario.nombre.focus();
        //posicionar el puntero donde surgio el error en este caso
        return false;
    }


    /*
    queremos validar que la entrada del campo de texto admita unicamente
    letras ya sea mayusculas o minisculas
    */ 

    var checkOK = "qwertyuiopasdfghjklñzxcvbnm"+"QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var checkStr = formulario.nombre.value; //obtenemos el valor de nombre

    var allValid = true;  //verificacion booleana para las cadenas

    for (i=0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);

        //otro for para ahora si comparar contra la cadena checkOK
        for(j=0; j < checkOK.length; j++)
            if(ch == checkOK.charAt(j))
            break;

            if(j == checkOK.length){
                allValid = false;
                break;
            }
    }

    if(!allValid){
        alert("Escriba unicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }



    /*
    vamos a validar que unicamente en el campo de edad
    se introduzcan valores numericos
    */

   var checkOK = "1234567890";

   var checkStr = formulario.edad.value; //obtenemos el valor de edad

   var allValid = true;  //verificacion booleana para las cadenas

   for (i=0; i < checkStr.length; i++){
       var ch = checkStr.charAt(i);

       //otro for para ahora si comparar contra la cadena checkOK
       for(j=0; j < checkOK.length; j++)
           if(ch == checkOK.charAt(j))
           break;

           if(j == checkOK.length){
               allValid = false;
               break;
           }
   }

   if(!allValid){
       alert("Escriba unicamente numeros en el campo de edad");
       formulario.edad.focus();
       return false;
   }

   /*
   vamos a validar la entrada del campo del correo electronico
   haremos uso de expresiones regulares (es una comprobacion de elementos de una cadena
    que deben de cumplir con un formato ya sea de entrada o salida)
   */

   var txt = formulario.email.value;

   //creamos la expresion regular para la comprobacion del formato
   //xxxxx@xxxxx.xxxx  xxxx.xxxx@xxxxx.xxxx.xxx

   var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

   alert("Email " + (b.test(txt)?"":"no")+ " valido");

   return b.test(txt);


}