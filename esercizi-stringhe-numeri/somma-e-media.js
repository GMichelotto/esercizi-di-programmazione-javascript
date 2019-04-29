/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/

var numbers = [1, 2, 3, 4, 5];

var sum = 0;
for (var i in numbers) sum += numbers[i];
var average = sum / numbers.length;
console.log ('Somma = ' + sum, ' media = ' + average);
