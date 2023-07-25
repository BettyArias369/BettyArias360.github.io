function advertir(){
    alert("¡No te vayas!")
}

function saludopersonalizado(){
    var name;
    var edad;
    name=prompt("Escribe tu nombre:")
    edad=prompt("Escribe tu edad:")

    alert("¡Hola! "+name+", yo también tengo "+edad+ " años")

}

function adivinar1(){
    var res=0;
    res=prompt("¿Cuánto es 12 x 12 ?")

    //Sí la respuesta es 144 (correcto)
    if(res==144){
        alert("FELICIDADES. ¡RESPUESTA CORRECTA!")
    }
    //Sino
    else{
        alert("¡ERROR!")
    }
}

function adivinar2(){
    var res=0;
    res=prompt("¿Cuánto es 5 x 5 ?")
    //Si la respuesta es 25 (correcto)
    if(res==25){
        alert("FELICIDADES. ¡RESPUESTA CORRECTA!")
    }
    //Sino
    else{
        alert("¡ERROR!")
    }
}

function adivinar3(){
    var res=0;
    res=prompt("¿Cuántos pies tiene un 100 pies ?")
    //Si la respuesta es 30 (correcto)
    if(res==30){
        alert("FELICIDADES. ¡RESPUESTA CORRECTA!")
    }
    //Sino
    else{
        alert("¡ERROR!")
    }
}