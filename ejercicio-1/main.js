
const totalVenta = (nota, descuento) => {

    if (isNaN(nota) || isNaN(descuento)) return console.log("Valor no numérico");
    if (nota <= 0) return console.log("Nota no válida");
    if (descuento < 0) return console.log("Descuento no válido");

    setTimeout(() => {
        const desc = (descuento / 100) * nota;
        console.log(nota - desc)
    }, 2000);
}

const args = process.argv.slice(2);

totalVenta(args[0], args[1]);
