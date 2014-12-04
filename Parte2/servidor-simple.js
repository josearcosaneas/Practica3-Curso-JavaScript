 /*  Codigo del servidor en node.
  *  Servidor simple para el ejercicio practico 3
  *  del curso de JavaScript.
  *  En este ejercicio se crea un servidor simple
  *  usando las libreria de http para crearlo. Ademas 
  *  se hace uso de la libreria fs para leer un 
  *  archivo .html y mostrarlo junto al numero de 
  *  peticiones que ha recibido el servidor.
  */
  
 /*
  * Importacion de variables 
  */ 
  
  
// Importamos  la libreria de http
var http = require("http");
// Importacion de la libreria fs
var fs = require('fs');
// variable que contara el numero
// de peticiones al servidor
var i =0;
// Pagina html a mostrar. Esta pagina fue usada el 
// la practica del ejercicio1.
var index = fs.readFileSync('pagina.html');
// numero de puerto
var numpor = 8888;

/*
 * Funcion request
 */

function onRequest(request, response) {
	// Mensaje a terminal indicando que ha sido
	// recibida una peticion al servidor
  console.log("Peticion Recibida.");
	// Definimos el tipo de contenido
  response.writeHead(200, {"Content-Type": "text/html"});
  // Mensaje 
  response.write("Este es un servidor simple creado");
  response.write("<br></br> para el curso de programacion cliente/servidor");
  response.write("<br></br> en javascript");
  // Actualizacion del servidor
  i=i+1;
  // Mostramos el numero de peticion a la pagina
  response.write("<br></br>Peticion a la pagina    "+ parseInt(i-1));
  response.write("<br></br>Tambien podemos mostrar otra pagina");
  // mostramos el contenido de una pagina en .html
  response.write(index);
  response.end();
}
// Con http creamos el servidor pasando como parametro 
// la funcion Request y indicando que escuche
//  por el puerto 8888
http.createServer(onRequest).listen(numpor);
// mensaje indicando que se ha iniciado el servidor 
// mostrando el puerto que se a indicado el para iniciar el server.
console.log("Servidor Iniciado en el Puerto."+ numpor);
