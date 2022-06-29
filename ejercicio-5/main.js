const totalVenta = async (nota, descuento) => {

    const desc = (descuento / 100) * nota
    return nota - desc;
}

const validarNota = async (nota, descuento) => {

    if (isNaN(nota) || isNaN(descuento)) return "Valor no numérico";
    else if (nota <= 0) return "Nota no válida";
    else if (descuento < 0) return "Descuento no válido";
    else return await totalVenta(nota, descuento);
}


const main = async () => {
    
    const args = process.argv.slice(2);
    const res = await validarNota(args[0], args[1]);
    console.log(res);
}

main();