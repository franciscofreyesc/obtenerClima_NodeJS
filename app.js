const latLon = require('./LatitudLongitud/latitudLongitud');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true
    }
}).argv;

let locacion = argv.direccion;

const getInfo = async(locacion) => {


    try {
        const coords = await latLon.obtenerLatitudLongitud(locacion);
        const temp = await clima.getClima(coords.latitud, coords.longitud);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ locacion }`;
    }

}



getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);