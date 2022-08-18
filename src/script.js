'use strict';

function getContentClick(event) {
  const value = event.target.innerText;
  filterAction(value);
} ;

const filterAction = value => {
  value === '0' ? addNumberInput(0) : null;
  value === '1' ? addNumberInput(1) : null;
  value === '2' ? addNumberInput(2) : null;
  value === '3' ? addNumberInput(3) : null;
  value === '4' ? addNumberInput(4) : null;
  value === '5' ? addNumberInput(5) : null;
  value === '6' ? addNumberInput(6) : null;
  value === '7' ? addNumberInput(7) : null;
  value === '8' ? addNumberInput(8) : null;
  value === '9' ? addNumberInput(9) : null;
  value === '.' ? addNumberInput('.') : null;
};;

function addNumberInput(value) {
  const inputScreen = document.getElementsByClassName('calculator__screen')[0];
  const inputValue = inputScreen.value;
  inputScreen.value = inputValue + value;
} ;














// mètodo 1: agregar los campos a la base de datos y de ahi tomarla ( no afectar la base original )
// resultado en el módulo 1 ( no afectado )
// que desde esa pueda editar y eliminar el módulo
// básicamente será una copia de la original pero con algunos campos ocultos (no visibles)
//ya altere la base y no existe problema en el funcionamiento de mod1 p

// porque me aceprta cambios en las configuración inicial y no enn los camopos agregados
// si la hice de nuevo --->
// QUISIERA DEJAR LA TABLA ORIGINAL CÖMO ESTABA ( quitandole los tres campos que agregue)

// método 2 : crear nueva vase con esos valores y tomarlos de ahi
// que esos campos que necesito los mande al sql

// o una copia de la tabla y esa a una nueva cadena de conexión

// si yo edito la de conciliaciones estoy dando permiso a editar la principal o
// sea podria editar una sola base desde dos entradas diferentes ???

// Solución :

// 1.- deberia crar una tabla con todos los campos de conciliaciones y los de control de nómina

// 2.- generar la vista de CN con todos los campos disponibles para edición pero solo visinles los necesarios del
