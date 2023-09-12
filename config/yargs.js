const argv = require("yargs")
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla'
    })
    .option('l',{
        alias: 'listar',
        type: "boolean",
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 9,
        describe: 'Este es el número hasta donde quieres la tabla'
    })
    .check((argv,options)=>{
        //console.log(yargs,argv);
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

//EXPORTACION POR DEFECTO
module.exports = argv;