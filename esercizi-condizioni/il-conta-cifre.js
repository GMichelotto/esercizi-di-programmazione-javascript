/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
var x = 245
  if (x < 9999) {
  x = x.toString();
	console.log(x.length);
      } else {
    x = 'non è un numero valido';
  }
