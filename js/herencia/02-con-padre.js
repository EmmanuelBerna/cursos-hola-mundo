function Entidad (entidad) {
    this.id = Math.random().toString('20');
    this.entidad = entidad;
}

function User() {
    Entidad.call(this, 'user');
    this.attrs = {
        name: 'chanchito feliz',
        email: 'chanchito@holamundo.io',
    }
}

const u = new User();
console.log(u);