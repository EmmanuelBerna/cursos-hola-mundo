// let numeros = [15, 10, -3];

// // numeros.sort();
// // numeros.reverse();

// // console.log(numeros);

// // let letras = ['z', 'a', 'c', 'b'];

// // letras.sort();
// // console.log(letras);

// let conMayusculas = ['Z', 'a', 'd'];

// conMayusculas.sort((a,b) => {
//     /**
//      * a antes b => -1
//      * b antes a => 1
//      * iguales => 0
//      */
//     let alower= a.toLocaleLowerCase();
//     let blower= b.toLocaleLowerCase();

//     if (alower < blower) {
//         return -1;
//     }
//     if (alower > blower) {
//         return 1;
//     }
//     return 0;
// });

// console.log(conMayusculas);


let usuarios = [
    { edad: 20, nombre: 'Abraham' },
    { edad: 30, nombre: 'Bernabe' },
    { edad: 10, nombre: 'Sanchez' },
];

usuarios.sort((a, b) => {
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    return 0;
});

console.log(usuarios);
