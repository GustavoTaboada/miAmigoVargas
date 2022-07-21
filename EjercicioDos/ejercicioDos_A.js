const  datos = require('./datosDos.js');

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
 
Ejercicio Dos
Parte A
  El usuario ingresa las operaciones de una cuenta estas pueden ser ingresos o egresos y tendran un monto.
  Se pedira al usuario el tipo[ingresos/egresos] y el monto[0,10000]  cuando el usuario quiera terminar
  la insercion de datos ingresara la palabra "salir" cuando el sistema le solicite el tipo de operacion.
  Debe mostrar la cantidad de tranzaciones al terminar en un  console.table({variable});

 node .\EjercicioDos\ejercicioDos_A.js
 */
function mostrar(){
  var tipoOperacion;
  var monto;
  var cantidadOperaciones = 0;
  
 // tu codigo aqui....

  console.table({cantidadOperaciones});
}

mostrar();

/**
 * Resultado:

salir
┌─────────────────────┬────────┐
│       (index)       │ Values │
├─────────────────────┼────────┤
│ cantidadOperaciones │   13   │
└─────────────────────┴────────┘
 */