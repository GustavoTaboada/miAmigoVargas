const datos = require('./datosDos.js');

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
 parte C
  El usuario ingresa las transacciones de una cuenta estas pueden ser ingresos o egresos y tendran un monto.
  Se pedira al usuario el tipo[ingresos/egresos] y el monto[0,10000]  cuando el usuario quiera terminar
  la insercion de datos ingresara la palabra "salir" cuando el sistema le solicite el tipo.
      c- Al terminar el ingreso Debe mostrar:   console.table({saldo})
           el saldo ;
           el menor ingreso;
           el mayor egreso;
           el promedio de egresos;
 */

function mostrar(){
 // tu codigo aqui....
}

mostrar();


/** Respuesta:

┌─────────────────┬────────────────────┐
│     (index)     │       Values       │
├─────────────────┼────────────────────┤
│      saldo      │        4450        │
│  menorIngreso   │        300         │
│   mayorEgreso   │        1350        │
│ promedioEgresos │ 292.85714285714283 │
└─────────────────┴────────────────────┘
 */