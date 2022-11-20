var prompt = require('prompt-sync')();
var a = prompt('Input angka : ');
var angka = Number(a);
if(a < 0){
    console.log('Tidak bisa input bilangan negatif');
} else if(a%2 == 0) {
    akar = Math.sqrt(a)
    console.log('Akar pangkat 2 dari '+ a + ' adalah ' + akar);
} else {
    console.log('Tidak bisa input bilangan ganjil');
}
