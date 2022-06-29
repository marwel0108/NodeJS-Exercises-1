class Nota {

    id;
    libro;
    autor;

    constructor(id, libro, autor) {
        this.id    = id;
        this.libro = libro;
        this.autor = autor;
    }

    toString() {
        return `* ID: ${this.id}.\n\t- Libro: ${this.libro}\n\t- Autor: ${this.autor}`
    }
}

module.exports = Nota;