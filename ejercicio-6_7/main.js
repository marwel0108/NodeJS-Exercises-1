const Notas = require('./classes/Notas')

const n = new Notas();

n.agregarNota('Lord of the Rings', 'J.R.R. Tolkien');
n.agregarNota('IT', 'Stephen King');
n.agregarNota('Harry Potter and the Globbet of Fire', 'J. K. Rowling');
n.agregarNota('Dune', 'Frank Herbert');
n.agregarNota('Coraline', 'Neil Gaiman');

n.obtenerNotas()
n.quitarNota(2);
n.obtenerNotas();

n.leerNota(3);
