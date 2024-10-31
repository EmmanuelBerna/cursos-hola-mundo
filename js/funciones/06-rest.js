const suma = (a, b, ...rest) => {
    console.log(rest);
}

// suma(1, 2, 3, 4, 5, 6);

const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg)
}
}

// logMsg('servidor:', 'Error 1', 'Peticion aceptada', 'socket asctivo')
let mensajes = ['Error 1', 'Peticion aceptada', 'socket asctivo'];
logMsg('Cliente movil:', ...mensajes);