const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id:15},
    ['lala'],
    true,
];

function dividePorTipo(arr) {
    return arr.reduce((acc, el) =>{
        let llave = typeof el;

        acc[llave] = acc[llave] ? acc[llave] : [];
        acc[llave].push(el);
        return acc;
    }, {});
};


let arr = dividePorTipo(miArray);
console.log(arr);