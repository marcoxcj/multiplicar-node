const { argv } = require('./config/yargs');

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(resp => {
                console.log('=============='.green);
                console.log(`=tabla del ${argv.base}=`.green);
                console.log('=============='.green);
                console.log(resp);
            });
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.blue(archivo)}`))
            .catch(err => { console.log(err); })
        break;

    default:
        console.log('comando no reconocido');

}

//console.log(process.argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1];