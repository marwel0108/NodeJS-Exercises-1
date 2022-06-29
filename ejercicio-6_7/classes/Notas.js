const Nota = require('./Nota')
const { readFile, writeFile } = require('../lib/fileLib');

class Notas {

    notas;

    constructor() {
        this.notas = [];
    }

    cargarNotas() {
        this.notas = []
        const arr = readFile()
        arr.forEach(nota => {
            this.notas.push(new Nota(nota.id, nota.libro, nota.autor))
        });
    }

    agregarNota(libro, autor) {
        this.cargarNotas()
        const id = (this.notas.length > 0) ? this.notas[this.notas.length - 1].id + 1 : 1;
        this.notas.push(new Nota(
            id,
            libro,
            autor
        ))
        writeFile(this.notas)
    }

    quitarNota(id) {
        this.cargarNotas();

        if (this.notas.length < 1 || this.notas.length < id){
            console.log('Operación no válida');
        } else {
            let count = 1;
            this.notas = this.notas.filter(nota => nota.id !== id);
            this.notas = this.notas.map(nota => new Nota(
                count++,
                nota.libro,
                nota.autor
            ))
            writeFile(this.notas);
        }
    }

    leerNota(id) {
        this.cargarNotas();
        const nota = this.notas.filter(nota => nota.id === id);
        console.log(nota.toString());
        console.log('---------------------------------------------')
    }

    obtenerNotas() {
        this.cargarNotas()
        this.notas.forEach(nota => console.log(nota.toString()))
        console.log('---------------------------------------------')
    }

}


module.exports = Notas;
