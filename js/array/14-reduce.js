// const numeros = [1, 2, 3, 4];

// const suma = numeros.reduce((acr, el) => {
//     return acr + el;
// }, 0);

// console.log(suma);

// const anidado = [[1, 2], 3, [4, 5]];

// const plano = anidado.reduce((acc, el) => acc.concat(el) , []);

// console.log(plano);

const usuarios = [
    {edad: 20, nombre: 'Juan'},
    {edad: 18, nombre: 'Pedro'},
    {edad: 15, nombre: 'Maria'},
    {edad: 19, nombre: 'Luis'},
];

const indexados =  usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {});

console.log(indexados);