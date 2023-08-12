//Ejercicio de logica

let day = prompt("Ingrese día");

if (day === null || day === "") {
  alert("Opción invalida");
} else {
  day = day.toLowerCase();
  if (
    day === "lunes" ||
    day === "martes" ||
    day === "miercoles" ||
    day === "miércoles" ||
    day === "jueves" ||
    day === "viernes"
  ) {
    alert("Es un día entre semana");
  } else {
    //if anidados
    if (day === "sabado" || day === "sábado" || day === "domingo") {
      alert("Es un fin de semana");
    } else {
      alert("Favor ingresar solo días de la semana ");
    }
  }
}
