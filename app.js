const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(
            archivo => console.log(`Archivo creado: ${archivo.green}`)).catch(
            err => console.log(err.red)
        );
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(process);
// console.log(module);
//let argv2 = process.argv;
//console.log(argv2);