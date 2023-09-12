const fs = require('fs');
const colors = require('colors');


//TODO ES PRIVADO
const crearArchivo = async (base = 5,listar= false,hasta=9) => {

    let salida ='';
    let consola ='';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base*i}\n`;
        consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
    }

    if (listar){
        console.log('========================'.rainbow);
        console.log(`   Tabla del: ${colors.bgRed(base)}    `);
        console.log('========================'.rainbow);
        console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);//capturar el error con un try-catch

    return (`tabla-${base}.txt creado`);
}

/*const crearArchivo =  (base = 5) => {

    return new Promise((resolve, reject) => {
        console.log('========================');
        console.log(`   Tabla del: ${base}    `);
        console.log('========================');

        let salida ='';

        for (let i = 1; i < 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);//capturar el error con un try-catch

        resolve(`tabla-${base}.txt creado`);
    });

}*/


module.exports = {
    crearArchivo //crearArchivo: crearArchivo
}