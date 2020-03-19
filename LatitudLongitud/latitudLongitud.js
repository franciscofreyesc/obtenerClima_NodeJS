const axios = require('axios');

const obtenerLatitudLongitud = async(locacion) => {
    const encodeUrl = encodeURI(locacion);

    const crearInstanciaAxios = axios.create({
        url: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'x-rapidapi-key': '2fdf06cfacmsh7305748bf50bf36p1001edjsn84b88c31a679'
        }
    });


    const resp = await crearInstanciaAxios.get();

    let data = resp.data.Results[0];
    if (resp.data.Results.length === 0) {
        throw new Error(`Error al consultar ${locacion}`);
    }

    let direccion = data.name;
    let latitud = data.lat;
    let longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
    obtenerLatitudLongitud
}