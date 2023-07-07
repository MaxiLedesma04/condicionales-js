// let numero1 = 10
// let numero2 = 5
// if (numero1 > numero2){
//     console.log("El numero es mayor")
// }

// let num1 = 7
// // let num2 = 3
// let num2 = 7
// if (num1 == num2){
//     console.log("Los numeros son iguales")
// } 
// else{
//     console.log("Los numeros no son iguales")
// }

// //  let num1 = 5
// //  let num2 = 7
// // // let num1 = 5
// // // let num2 = 5
// //  let num1 = 10
// //  let num2 = 6
//  if (num1 > num2){
//      console.log("El mas grande es " + num1)
//  }
//     else if(num2 > num1){
//      console.log("El mas grande es " + num2)
//  }
//     else {
//      console.log("Son iguales")
//  }


// let num1 = 10
// let num2 = 29
// let num3 =5

// if (num1 < num2 && num1 < num3){
//     console.log("el numero mas chico es " + num1)
// }
// else if (num2 < num1 && num2 < num3){
//     console.log("el numero mas chico es " + mum2)
// }
// else if (num3 < num1 && num3 < num2){
//     console.log("el numero mas chico es " + num3)
// }


// const martin = {
//     nombre: "Martin",
//     edad: 30,
//     altura: 168,
// }
// const pablo = {
//     nombre: "Pablo",
//     edad: 15,
//     altura: 180
// }
// function calculoEdad(edad1, edad2){
//     if (edad1 > edad2){
//         console.log("el mayor es martin")
//     }
//     else {
//         console.log("el mayor es pablo")
//     }
// }
// calculoEdad(martin.edad, pablo.edad)
// function calculoAltura(alt1, alt2){
//     if (alt1 > alt2){
//         console.log("el mas alto es martin")
//     }
//     else {
//         console.log("el mas alto es pablo")
//     }

// }
// calculoAltura(martin.altura, pablo.altura)

// let nombre = prompt ("ingrese su nombre:")
// let edad = prompt("ingrese su edad:")
// let altura = prompt("ingrese su altura")
// let vision = prompt("ingrese su rango de vision entre 1 y 10")
//  if (edad > 18 && altura > 150 && vision >= 8){
//     console.log("esta capacitado para conducir")
//  }
//  else {
//     console.log("no esta capacitado")
//  }

//  let nombre = prompt ("ingrese su nombre")
//  function paseSeguro(nombre){
//      if (nombre !== "Maxi") {
//          let pase = prompt ("ingrese su pase")
//          if (pase !== "vip"){
//              let entrada = prompt ("tiene su entrada")
//              if (entrada =="si"){
//                  let cantidad = Number (prompt ("ingrese su dinero disponible"))
//                  if (cantidad < 1000){
//                      alert("No posee saldo suficiente")
//                  }
//                  else{
//                      alert ("Adelante")
//                  }
//              }else {
//                  alert("Bueno hasta luego")
//              }
//          }else{
//              alert("puede pasar porque es vip")
//          }
//      }else{
//          alert("puede pasar por su nombre Maxi")
//      }
//  }
//  paseSeguro(nombre)

// let numeroIncognita = 4
// let numero1 = Number (prompt ("ingrese un numero del 1 al 10"))
// function adivinaElNumero(numero){
//     if (numero !== numeroIncognita){
//         let numero2 = Number (prompt("Usted no acerto ingrese otro numero"))
//         if (numero2 !==numeroIncognita){
//             let numero3 = Number (prompt ("Ultimo intento ingrese un numero del 1 al 10"))
//             if (numero3 !== numeroIncognita){
//                 console.log ("usted no acerto, el numero es 4")
//             }else {
//                 alert("Muy bien hecho acertaste!!")
//             }
//         }else {
//             alert("Muy bien hecho acertaste!!")
//         }
//     }else {
//         alert("Muy bien hecho acertaste!!")
//     }
// }
//  adivinaElNumero(numero1)

// let numero1 = Number (prompt ("Ingrese su edad"))
// function categoriaEdad(numero){
//     if (numero >= 0 && numero <= 12){
//         console.log("Usted es un infante")
//     }
//     else if (numero > 12 && numero <= 18 ){
//             console.log("Usted es un adolescente")
//         }
//         else if (numero > 18 && numero <= 45){
//                 console.log ("Usted es un adulto")
//             }
//         else if (numero > 45 && numero <= 100) {
//                 console.log("Usted es un anciano")
//             }
//         else {
//             alert("De verdad tiene esa edad?")
//         }
// }
//  categoriaEdad(numero1)



// // ejercicio 10:
//  let jugador1 = prompt("JUGADOR 1. ingrese piedra, papel o tijera")
//  let jugador2 = prompt("JUGADOR 2, ingrese piedra, papel o tijera")

//  if( jugador1 == "piedra" && jugador2 == "tijera" || jugador1 == "papel" && jugador2 == "piedra" || jugador1 == "tijera" && jugador2 == "papel"){
//      alert ("A ganado el JUGADOR 1!!")
//  }
//  else if( jugador2 == "piedra" && jugador1 == "tijera" || jugador2 == "papel" && jugador1 == "piedra" || jugador2 == "tijera" && jugador1 == "papel"){
//      alert ("A ganado el JUGADOR 2!!")
//  }
//  else if (jugador1 == jugador2){
//      alert ("Juego empatado")
//  }
//  else{
//      alert("Uno de los dos hizo trampa")
//  }


// let color = prompt("Ingrese Un Color")
// switch (color){
//     case  "blanco": console.log("Falta de color");
//     break;
//     case "negro": console.log("Falta de color");
//     break;
//     case "verde": console.log("El color de la Naturaleza");
//     break;
//     case "azul": console.log("El color del agua");
//     break;
//     case "amarillo": console.log("El color del sol");
//     break;
//     case "rojo": console.log("el color del fuego");
//     break;
//     case "marron": console.log("El color de la tierra");
//     break;
//     default: console.log("Exelente eleccion, no lo teniamos pensado")
// }


// let operacion = !Number (prompt("Ingrese na operacion, summa, resta, multipiclacion"))
// let numero1 = Number(prompt("Escriba un numero"))
// let numero2 = Number(prompt("escriba otro numero"))

// function calculo(operacion, numero1, numero2){
//     switch (operacion){
//         case operacion:
//             let suma = numero1 + numero2;
//             alert (suma);
//             break;
//         case 
//     }
// }

// function ingresarDatosDNI() {
//     let numero = prompt("Ingrese el número de DNI:");
//     let nombre = prompt("Ingrese su nombre:");
//     let afpellido = prompt("Ingrese su apellido:");
//     let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:");

//     console.log("Número de DNI: " + numero);
//     console.log("Nombre: " + nombre);
//     console.log("Apellido: " + apellido);
//     console.log("Fecha de nacimiento: " + fechaNacimiento);

//     let confirmacion = prompt("¿Los datos ingresados son correctos?");

//     if (confirmacion) {
//       let dni = {
//         numero: numero,
//         nombre: nombre,
//         apellido: apellido,
//         fechaNacimiento: fechaNacimiento
//       }
//       console.log("Registro exitoso. Los datos ingresados son:");
//       console.table(dni);
//     } else {
//       console.log("Vuelva a intentarlo en 1 mes.");
//     }
//   }

//   ingresarDatosDNI();


