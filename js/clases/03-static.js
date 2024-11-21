class Restaurants {
    constructor(name) {
         this.name = name;
    }

    getTimetable() { // obtener horario
        console.log('horario restaurante')
    }

    static getRestaurant(id) {
        return new Restaurants('bbg');
    }
}

const r = Restaurants.getRestaurant(12);

