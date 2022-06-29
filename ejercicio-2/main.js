
const totalVenta = (nota, descuento, callback) => {

    if (isNaN(nota) || isNaN(descuento)) return callback("Valor no numérico", null);
    if (nota <= 0) return callback("Nota no válida", null);
    if (descuento < 0) return callback("Descuento no válido", null);

    setTimeout(() => {
        const desc = (descuento / 100) * nota;
        callback(null, nota - desc)
    }, 2000);
}

const callback = (error, value) => {

    if (error) console.error(error) 
    else console.log(value);
}

const args = process.argv.slice(2);

totalVenta(args[0], args[1], callback);
