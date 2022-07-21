var datos = require('./datosDos.js');

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
Parte B
  El usuario ingresa las transacciones de una cuenta estas pueden ser ingresos o egresos y tendran un monto.
  Se pedira al usuario el tipo[ingresos/egresos] y el monto[0,10000]  cuando el usuario quiera terminar
  la insercion de datos ingresara la palabra "salir" cuando el sistema le solicite el tipo.
      B- Debe mostrar el saldo con un console.table({saldo}) luego de cadad transaccion;
 
  ejecutar en consola:   
       node .\EjercicioDos\solucion_B.js
 */
function mostrar()
{
  var tipoOperacion;
  var monto;
  var saldo = 0;
  do
  {
    do
    {
      tipoOperacion = prompt("Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):");
    }while(tipoOperacion != "ingreso" && tipoOperacion != "egreso" && tipoOperacion != "salir");
    
    if(tipoOperacion == "ingreso" )
    {
      do
      {
        monto = prompt("Ingrese monto ingreso:");
      }while(monto <= 0 || monto > 10000);
      saldo += parseInt(monto);
    }

    if(tipoOperacion == "egreso")
    {
      do
      {
        monto = prompt("Ingrese monto egreso:");
      }while(monto <= 0 || monto > 10000);
      saldo -= parseInt(monto);
    }
    console.table({saldo});
  }while( tipoOperacion != "salir");

}

// mostrar();
mejora();


function mejora(){
  var tipoOperacion;
  var monto;
  var saldo = 0;
  do
  {
    do
    {
      tipoOperacion = prompt("Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):");
    }while(tipoOperacion != "ingreso" && tipoOperacion != "egreso" && tipoOperacion != "salir");

    if(tipoOperacion != "salir" )
    {
      do
      {
        monto = prompt(`Ingrese monto ${tipoOperacion}:`);
        monto = parseInt(monto);
      }while(monto <= 0 || monto > 10000);
      
      if(tipoOperacion == "egreso")
      {
        saldo -= monto;
      }else 
      {
        saldo += monto;
      }
    }
    console.table({saldo});
  }while( tipoOperacion != "salir");

}

/**Respuesta:
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):

Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
ingreso
Ingrese monto ingreso:
5000
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  5000  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
egreso
Ingrese monto egreso:
1350
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  3650  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
ingreso
Ingrese monto ingreso:
10001
Ingrese monto ingreso:
300
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  3950  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
egreso
Ingrese monto egreso:
200
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  3750  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
ingreso
Ingrese monto ingreso:
300
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  4050  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
egreso
Ingrese monto egreso:
100
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  3950  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
ingreso
Ingrese monto ingreso:
-20
Ingrese monto ingreso:
300
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  4250  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
egreso
Ingrese monto egreso:
100
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  4150  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
ingreso
Ingrese monto ingreso:
300
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  4450  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
egreso
Ingrese monto egreso:
0
Ingrese monto egreso:
100
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  4350  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
egreso
Ingrese monto egreso:
100
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  4250  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):

Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
egreso
Ingrese monto egreso:
100
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  4150  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
PEPE
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
ingreso
Ingrese monto ingreso:
300
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  4450  │
└─────────┴────────┘
Ingrese tipo de operacion (ingreso/egreso) /para salir(salir):
salir
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  saldo  │  4450  │
└─────────┴────────┘
 */