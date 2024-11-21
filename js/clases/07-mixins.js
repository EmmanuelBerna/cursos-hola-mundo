const Entidad = {
    save() {
        console.log('Guardando entidad');
    },
}

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, Entidad);
const u = new User('chanchito');
u.save();