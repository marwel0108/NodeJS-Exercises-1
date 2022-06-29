const totalVenta = (nota, descuento) => {

    return new Promise((resolve) => { 
        const desc = (descuento / 100) * nota
        resolve(nota - desc);
    });
}

const validarNota = (nota, descuento) => {

    return new Promise((resolve, reject) => {

        if (isNaN(nota) || isNaN(descuento)) reject("Valor no numérico");
        else if (nota <= 0) reject("Nota no válida");
        else if (descuento < 0) reject("Descuento no válido");
        else resolve(totalVenta(nota, descuento));
    });
}

const args = process.argv.slice(2);

validarNota(args[0], args[1])
    .then(v => console.log(v))
    .catch(err => console.error(err))