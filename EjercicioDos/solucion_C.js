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
      c- Al terminar el ingreso Debe mostrar en un console.table({ }) :
           el saldo ;
           el menor imgreso;
           el mayor egreso;
           el promedio de egresos;
 */

function mostrar(){
  var tipoOperacion;
  var monto;
  var saldo = 0;
  var menorIngreso = 10001; // valor mayor que cualquier ingreso posible
  var mayorEgreso = 0; // valor menor que cualquier egreso posible
  var promedioEgresos = 0;
  var contadorEgresos = 0;
  var acumuladorEgresos = 0;
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
        monto = parseInt(monto);
      }while(monto <= 0 || monto > 10000);
      saldo += monto;
      if(monto < menorIngreso)
      {
        menorIngreso = monto;
      } 
    }

    if(tipoOperacion == "egreso")
    {
      do
      {
        monto = prompt("Ingrese monto egreso:");
        monto = parseInt(monto);
      }while(monto <= 0 || monto > 10000);
      saldo -= monto;
      contadorEgresos++;
      acumuladorEgresos += monto;
      if(monto > mayorEgreso)
      {
        mayorEgreso = monto;
      }
    }
  }while( tipoOperacion != "salir");

  if(contadorEgresos > 0){
    promedioEgresos = acumuladorEgresos / contadorEgresos;
  }
  console.table({saldo,menorIngreso,mayorEgreso,promedioEgresos});
}

mostrar();
//mejora();
function mejora(){
  var tipoOperacion;
  var monto;
  var saldo = 0;
  var menorIngreso = 10001; // valor mayor que cualquier ingreso posible
  var mayorEgreso = 0; // valor menor que cualquier egreso posible
  var promedioEgresos = 0;
  var contadorEgresos = 0;
  var acumuladorEgresos = 0;
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
        contadorEgresos++;
        acumuladorEgresos += monto;
        if(monto > mayorEgreso)
        {
          mayorEgreso = monto;
        }
      }else // "ingreso" por default
      {
        saldo += monto;
        if(monto < menorIngreso)
        {
          menorIngreso = monto;
        } 
      }
    }

  }while( tipoOperacion != "salir");

  if(contadorEgresos > 0){
    promedioEgresos = acumuladorEgresos / contadorEgresos;
  }
  
  console.table({saldo,menorIngreso,mayorEgreso,promedioEgresos});
}