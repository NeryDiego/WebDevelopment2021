/*
 6 am - 11 am : Buenos dias
 12 pm - 18 pm : Buenas tardes
 19 pm - 24 pm : Buenas noches
 0 am - 6 am : Durmiendo
*/
let horaDia = 2;

if((horaDia >= 6) && (horaDia <= 11)){
    console.log("Buenos días");
} else if ((horaDia > 11) && (horaDia <= 18)){
    console.log("Buenas tardes");
} else if ((horaDia > 18) && (horaDia <= 24)){
    console.log("Buenas noches");
} else {
    console.log("Durmiendo");
}
