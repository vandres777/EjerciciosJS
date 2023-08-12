//Ejercicio de logica

let departamento = prompt("Ingresar un departamento");

if (departamento === null || departamento === "") {
  alert("Opción invalida");
} else {
  departamento = departamento.toLowerCase();

  switch (departamento) {
    case "cundinamarca":
      alert("La capital es Bogotá");
      break;
    case "antioquia":
      alert("La capital es Medellín");
      break;
    case "quindio":
      alert("La capital es Armenia");
      break;
    case "santander":
      alert("La capital es Bucaramanga");
      break;
    case "bolivar":
      alert("La capital es Cartagena");
      break;
    default:
      if (departamento === "España" || departamento === "Francia") {
        alert("Ingresaste un país, debes ingresar un departamento de Colombia");
      } else {
        alert("Favor ingresar solo departamentos permitidos");
      }
  }
}
