let afuera = 'estoy afuera'

function alcance() {
    afuera = 'estoy dentro';
    function saludo() {}
    var vieja = 'ya no usar';
    let variable = 'Hola mundo';
    const constante = 'hola mundo';
    // console.log(saludo);
    // console.log(vieja);
    // console.log(variable);
    // console.log(constante);
};

console.log(afuera);
alcance()
console.log(afuera);