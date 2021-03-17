function numeroIsPar(a){
    if(a % 2 != 0){
        return false;
    } else {
        return true;
    }
}

if(numeroIsPar(4)){
    console.log("El número es par");
} else {
    console.log("El número es impar");
}