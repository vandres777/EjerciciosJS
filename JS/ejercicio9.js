/**
 
2 -
Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)***
Ingresar objetivo de visita (turismo, comida, museos)
Dependiendo de la opcion elegida
ejemplo1 (antioquia y comida)
mostrar un alert("las comida mas populares en antioquia son la bandeja paisa, arepa rellena etc" )
ejemplo 2: se ingreso cundinamarca y turismo
mostrar un alert(turismo para visitar en cundinamarca es monserrate, la candelaria etc)
alert("opcion no valida") en caso que no se ingrese alguna de las opciones
**/

let departamento = prompt(
  "Ingrese un departamento (Cundinamarca, Valle o Quindío):"
);
departamento = departamento.toLowerCase();

if (
  departamento === "cundinamarca" ||
  departamento === "valle" ||
  departamento === "quindio"
) {
  let opcion = prompt("Ingrese una opción (museos, comida, lugares):");
  opcion = opcion.toLowerCase();

  switch (departamento) {
    case "cundinamarca":
      switch (opcion) {
        case "museos":
          informacion =
            "Museo de Oro de Bogotá" + "\n" + " Museo Nacional de Colombia";
          break;
        case "comida":
          informacion = "Ajiaco, Tamal" + "\n" + " Changua";
          break;
        case "lugares":
          informacion =
            "La Catedral de Sal de Zipaquirá" + "\n" + " Laguna de Guatavita";
          break;
        default:
          informacion = "Opción inválida";
      }
      break;
    case "valle":
      switch (opcion) {
        case "museos":
          informacion =
            "Museo de Arte Moderno de Cali" + "\n" + "Museo La Tertulia";
          break;
        case "comida":
          informacion =
            "Sancocho de Gallina " + "\n" + " Aborrajados" + "\n" + " Cholado";
          break;
        case "lugares":
          informacion =
            "Parque Nacional Natural Farallones de Cali" +
            "\n" +
            "Zoologico de Cali";
          break;
        default:
          informacion = "Opción inválida";
      }
      break;
    case "quindio":
      switch (opcion) {
        case "museos":
          informacion =
            "Museo del Oro Quimbaya" + "\n" + " Museo de Arte Quindiano";
          break;
        case "comida":
          informacion = "Arepas de Chócolo" + "\n" + "Sancocho";
          break;
        case "lugares":
          informacion = "Salento" + "\n" + " Valle de Cocora";
          break;
        default:
          informacion = "Opción inválida";
      }
      break;
  }

  if (
    opcion === "museos" &&
    opcion === "comida" &&
    opcion === "lugares" &&
    informacion === "Opción inválida"
  ) {
    alert("Opción ingresada no es válida");
  } else {
    alert(`Información sobre ${opcion} en ${departamento}:
${informacion}`);
  }
} else {
  alert("Departamento inválido");
}
