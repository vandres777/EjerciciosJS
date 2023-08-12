//Condicionales
/*
operadores de comparacion
(==) comparamos valores sin importar el tipo de dato
(===) comparamos valores respetando el tipo de dato
(<)mayor
(>) menor

operadores logicos
(||) o
(&&) y

 */

const age = prompt("Ingresa tu edad");
const country = prompt("Ingresa tu país").toLowerCase();

// condicional if/else
if (age >= "16" && country != "alemania") {
  alert("se habilitó el catalogo de peliculas violentas");
} else {
  alert("No tienes permiso de ver este catalogo");
}
