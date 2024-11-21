class Restaurants {
    #getTimetable;
    constructor(name) {
        this.name = name;
    }

    get getTimetable () {
        return this.#getTimetable;
    }
       
    
    set getTimetable (value) {
        let date =  new Date(value);
        let time =  date.getTime();
        if (Number.isNaN(time)) {
            throw new Error('Fecha no válida');
        }
        this.#getTimetable = date;
    }
}

const r = new Restaurants('bbg');

r.getTimetable = '1 march 1978'
