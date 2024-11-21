class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }

    save () {
        console.log('Guardando entidad');
    }
}

class User  extends Entidad {
    constructor(name) {
        super(1);
        this.name = name;
    }

    save () {

        super.save();
        console.log('Guardando usuario');
    }
}

const u = new User('pepe');

