// thid hace referencia a un objeto
// si no esta en un objeto hace la referencia a el objeto window, global
//new hace  referencia al objeto que sera creado 


// const user = {
//     name: 'Nico',
//     login() {
//         console.log(this);
//     }
// };

// user.logout = function logout () {
//     console.log(this);
// }

// console.log(user);

// function log() {
//     console.log(this);
// };

// log();
/**
 * se crea un objeto literal
 * se vincula este objeto a this
 * se vincula el prototipo
 * si no retorna nada, entonces retorna this
 * 
 */
function Log(mensaje) {
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('Hola Mundo');