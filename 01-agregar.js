const letras = ['a', 'b', 'c'];

// agregar al final del array
letras.push('d');

// agregar al principio del array
letras.unshift('e');

// agregar enmedio del array
letras.splice(3, 0, 'f');


console.log(letras);