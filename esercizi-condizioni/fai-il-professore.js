/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/
function voto (x) {
  if (x < 18 ) {
    return "insufficiente";
  } else if (x >= 18 && x < 21) {
  return "sufficiente";
} else if (x >= 21 && x < 24) {
  return "buono";
} else if (x >= 24 && x < 27) {
  return "distinto";
} else if (x >= 27 && x <= 29 ) {
  return "ottimo";
} else if ( x = 30) {
  return "eccellente";
}
}
console.log(voto (29));
