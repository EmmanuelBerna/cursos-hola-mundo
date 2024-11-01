function sumaTodo(arr) {
    if(!Array.isArray(arr)) {
        throw new Error('El parámetro no es un array');
    }
    return arr.reduce((acc, el) => {
        if (typeof el !=='number' || Number.isNaN(el)) {
            throw new Error(`Elemento ${el} no es un numero`);
        }
        return acc + el
    });
}

// console.log(sumaTodo([1, 2, 3, 4]));
// siempre envolver el codigo en un try catch
try {
console.log(sumaTodo([1, 2, NaN, 'Hola Mundo']));
} catch(e) {
    console.log(e.message);
}

console.log('Despues del try catch');