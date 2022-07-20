var datos = require('./datosUno.js');

function* generador(data) {
  let index=0;
  while (index < data.length) {
    yield data[index];
    index++;
  }
}
const iterator = generador(datos.data);
const prompt = (str)=>{
  console.log(str);
  let dato = iterator.next().value;
  console.log(dato);
  return dato
}
/**
 Ejercicios  
  Se ingresas nombre y edad de 16 pasajeros
  El nombre no puede estar vacio ni ser nulo
  Validar que las edades sean mayor que cero
  contar cuantos mayor que 18  años   => (18,oo]
  contar cuantos entre  19  y 25 años => [19,25] = (18,24)
  contar cuantos entre  26 y 35 años  => [26.35] = (25,34)
  contar cuantos entre  36 y 50  años => [36,50] = (35,49)
  contar cuantos  menores de 18 y  mayores de 50 años =>[oo, 18) or [50,oo]
 
  Ejecutar en la consola
   node .\EjercicioUno\ejercicioUno.js
*/

function mostrar(){
  var nombre
  var edad
  var cantidadPasajeros= 16;
  var contadorMayo18 = 0;
  var contadorEntre19y25 = 0;
  var contadorEntre26y35 = 0;
  var contadorEntre36y50 = 0;
  var contadorIgualMenor18yMayor50 = 0;
 
  // tu codigo aqui...........

  console.table({contadorMayo18,contadorEntre19y25,contadorEntre26y35,contadorEntre36y50,contadorIgualMenor18yMayor50});
}

mostrar();

/**
 *
35
┌──────────────────────────────┬────────┐
│           (index)            │ Values │
├──────────────────────────────┼────────┤
│       contadorMayor18        │   12   │
│      contadorEntre19y25      │   2    │
│      contadorEntre26y35      │   5    │
│      contadorEntre36y50      │   3    │
│ contadorIgualMenor18yMayor50 │   6    │
└──────────────────────────────┴────────┘
 */
