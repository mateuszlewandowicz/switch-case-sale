var data = new Date();
dzien = data.getDay();

var num = dzien;
var n = num.toString();


switch(n){

    case '0':
        console.log("Weekendowa wyprzedaż do 50% zniżki!");
        break;
    case '6':
        console.log("Weekendowa wyprzedaż do 50% zniżki!");
        break;
    case '1':
        console.log("Dzisiaj mamy 10% zniżki!");
        break;
    case '2':
        console.log("Dzisiaj mamy 20% zniżki!");
        break;
    case '3':
        console.log("Dzisiaj mamy 30% zniżki!");
        break;
default:
    console.log("Dzisiaj nie mamy promocji!");
    break;
}