const usuario = {
    nombre: 'Abraham',
    apellido: 'Sanchez',
    get nombreCompleto () {
        return `${usuario.nombre} ${usuario.apellido}`;
    },
    set nombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

usuario.nombreCompleto = 'Emmanuel Sanchez'
console.log(usuario.nombreCompleto);
