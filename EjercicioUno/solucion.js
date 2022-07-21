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
  contar cuantos  menor o igual de 18 y  mayores de 50 años =>[oo, 18) or [50,oo]
 
  Ejecutar en la consola
   node .\EjercicioUno\solucion.js
*/

function mostrar(){
  var nombre
  var edad
  var cantidadPasajeros= 16;
  var contadorMayor18 = 0;
  var contadorEntre19y25 = 0;
  var contadorEntre26y35 = 0;
  var contadorEntre36y50 = 0;
  var contadorIgualMenor18yMayor50 = 0;

  for( var i=0; i<cantidadPasajeros; i++){
    do
    {
      nombre = prompt(`Ingrese nombre pasajero numero ${i+1} :`);
    }while(nombre == "" || nombre == null);
    
    do
    {
      edad = prompt("ingrese edad:");
    }while(edad <= 0 );
    
    if(edad > 18)
    {
      contadorMayor18++;
    }
    if(edad >= 19 && edad <= 25)
    {
      contadorEntre19y25++;
    }
    if(edad >= 26 && edad <= 35)
    {
      contadorEntre26y35++;
    }
    if(edad >= 36 && edad <= 50)
    {
      contadorEntre36y50++;
    }
    if(edad <= 18 || edad > 50)
    {
      contadorIgualMenor18yMayor50++;
    }
  }
  console.table({contadorMayor18,contadorEntre19y25,contadorEntre26y35,contadorEntre36y50,contadorIgualMenor18yMayor50});
}

mostrar();

//mejora();

function mejora(){
  var nombre
  var edad
  var cantidadPasajeros= 16;
  var contadorMayor18 = 0;
  var contadorEntre19y25 = 0;
  var contadorEntre26y35 = 0;
  var contadorEntre36y50 = 0;
  var contadorIgualMenor18yMayor50 = 0;

  for( var i=0; i<cantidadPasajeros; i++){
    do
    {
      nombre = prompt(`Ingrese nombre pasajero numero ${i+1} :`);
    }while(nombre == "" || nombre == null);
    
    do
    {
      edad = prompt("ingrese edad:");
    }while(edad <= 0 );

    // Organizamos  todas las condiciones para que sean exluyentes osea si cumple una necesariamente no cumple el resto,
    // asi podemos encadenarlos con "else/else if" para que cuando cumpla una condicion en la cadena ya no se ejecute el resto
    // si es  menor o igual a 18 solo se ejecuta el incremento del contador no pregunta todas las condiciones.
    if(edad <= 18) 
    {
      contadorIgualMenor18yMayor50++;
    }
    else 
    {
      contadorMayor18++;
      if(edad >= 19 && edad <= 25)
      {
        contadorEntre19y25++;
      }
      else if(edad >= 26 && edad <= 35)
      {
        contadorEntre26y35++;
      }
      else if(edad >= 36 && edad <= 50)
      {
        contadorEntre36y50++;
      }
      else 
      {
        contadorIgualMenor18yMayor50++;
      }
    }
  }
  
  console.table({contadorMayor18,contadorEntre19y25,contadorEntre26y35,contadorEntre36y50,contadorIgualMenor18yMayor50});

}


/*** Respuesta:
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
