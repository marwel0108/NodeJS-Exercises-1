const totalVenta = (nota, descuento) => {

    return new Promise((resolve, reject) => { 
        
        if (isNaN(nota) || isNaN(descuento)) reject("Valor no numérico");
        if (nota <= 0) reject("Nota no válida");
        if (descuento < 0) reject("Descuento no válido");
    
        const desc = (descuento / 100) * nota
        resolve(nota - desc);
    });
}

const args = process.argv.slice(2);

totalVenta(args[0], args[1])
    .then(value => console.log(value))
    .catch(err => console.error(err))
