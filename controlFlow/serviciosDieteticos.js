let userRole = "Empleado";
console.log(userRole);  

let accessMessage; 

if (userRole === "Empleado") {
    accessMessage = "Autorizado a tener acceso a Servicios Dietéticos";
} else if (userRole === "Miembro Inscrito") {
    accessMessage = "Autorizando a tener acceso a Servicios Dietéticos y a interacción uno a uno con un dietista";
} else if (userRole === "Suscriptor") {
    accessMessage = "Acceso parcial a Servicios Dietéticos";
} else if (userRole === "No suscriptor") {
    accessMessage = "Necesitas inscribirte y/o suscribirte para poder acceder" 
} 

console.log("Acceso:", accessMessage);