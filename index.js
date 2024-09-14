// Esto es un comentario 😊
// Un programa básico en JavaScript que imprime un saludo 🎉
// 01 imprimir un saludo en la consola 🎉
console.log("¡Hola, mundo! Bienvenido a JavaScript 🚀");

// 02 Declaración de variables y tipos de datos 😊
let nombre = "Andrés Eduardo"; // String (Cadena de texto)
let edad = 36; // Number (Número)
let esIngeniero = true; // Boolean (Booleano)
let auto = null; // Null (Valor nulo)
let pareja; // Undefined (Indefinido)
let hobbies = ["Leer", "Programar", "Viajar"]; // Array (Arreglo)
// Object (Objeto)
let direccion = {
  calle: "Cr 87c # 50b-03",
  ciudad: "Bogotá",
  pais: "Colombia",
};

// Mostrar los valores en la consola 🎉
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es ingeniero:", esIngeniero);
console.log("Auto:", auto);
console.log("Pareja:", pareja);
console.log("Hobbies:", hobbies);
console.log("Hobbies:", hobbies[0]);
console.log("Hobbies:", hobbies[2]);
console.log("Dirección:", direccion);
console.log("Dirección:", direccion.calle);
console.log("Dirección:", direccion.ciudad);
console.log("Dirección:", direccion.pais);
// Importamos el módulo http 😊
const http = require("http");

// Creamos el servidor 🚀
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" }); // Configuramos el encabezado de la respuesta 📝
  res.write("<h1>¡Hola Mundo desde Node.js! 🌍</h1>"); // El contenido que se mostrará en el navegador 🎉
  res.end(); // Finalizamos la respuesta
});

// Establecemos el puerto y ponemos a escuchar el servidor 😊
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port} 🚀`);
});
