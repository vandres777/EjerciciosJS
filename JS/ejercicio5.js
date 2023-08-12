// Logica y algoritmos

//direccion,estado civil, cedula, celular, correo, salario
//ingles
let userName;
let age;
let address;
let maritalStatus;
let identification;
let cellPhone;
let email;
let salary;

function registerData() {
  userName = prompt("Ingresa tu nombre");
  age = prompt("Ingresa tu edad");
  address = prompt("Ingresa tu direccion");
  maritalStatus = prompt("Ingresa tu estado civil");
  identification = prompt("Ingresa tu cedula");
  cellPhone = prompt("Ingresa tu celular");
  email = prompt("Ingresa tu correo");
  salary = prompt("Ingresa tu salario");
}

function showData() {
  alert(
    "Tu nombre es: " + userName + "\n" +
      "Tu edad es: " + age + "\n" +
      "Tu direccion es: " + address +"\n" +
      "Tu estado civil es: " + maritalStatus + "\n" +
      "Tu cedula es: " + identification + "\n" +
      "Tu celular es: " + cellPhone + "\n" +
      "Tu salario es: " + salary + "\n"
  );
}
