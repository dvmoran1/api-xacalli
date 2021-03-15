module.exports = function(app) {
    const serviceDetail = require('../controllers/ctlServiceDetail.js');
    app.post  ('/serviceDetail/',           serviceDetail.nuevoServiceDetail);
    app.get   ('/serviceDetail/',           serviceDetail.obtenerServiceDetails);
    app.get   ('/serviceDetail/:id_epo',    serviceDetail.obtenerServiceDetail);
    app.put   ('/serviceDetail/:id_epo',    serviceDetail.actualizarServiceDetail);
    app.delete('/serviceDetail/:id_epo',    serviceDetail.eliminarServiceDetail);
    app.get   ('/serviceDetail/limit/:val', serviceDetail.obtenerServiceDetailsLimit);
    app.get   ('/serviceDetail/coincidencia/:palabra', serviceDetail.buscarCoincidencia);
    app.get   ('/serviceDetail/atributos/buscar/',     serviceDetail.buscarPorAtributo);
}
