const usuarios = [
    {edad: 20, nombre: 'Juan', plan: 'premium'},
    {edad: 18, nombre: 'Pedro', plan: 'free'},
    {edad: 15, nombre: 'Maria', plan: 'free'},
    {edad: 19, nombre: 'Luis', plan: 'gold'},
];

function grupBy(arr, prop) {
    return arr.reduce((acc, el) => {
        let valor = el[prop];

        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    }, {})
};

const grouped = grupBy(usuarios, 'plan');
console.log({grouped})