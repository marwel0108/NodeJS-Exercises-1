const fs = require('fs');
const data = './ejercicio-6_7/data/notas.json'

const readFile = () => {
    const raw = fs.readFileSync(data, {
        encoding: 'utf8'
    });
    
    return JSON.parse(raw);
}

const writeFile = (notas) => {
    fs.writeFileSync(data, JSON.stringify(notas))
}

module.exports = {
    readFile, 
    writeFile
}