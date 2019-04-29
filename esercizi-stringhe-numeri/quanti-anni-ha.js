/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var year = 2019;
var yearOfBirth = 1969;
var years100 = 100;

var oldRU = year - yearOfBirth;
var upTo100 = years100 - oldRU;

console.log ('età: ' + oldRU + ' anni', '  anni mancanti a 100: ' + upTo100 + ' anni');