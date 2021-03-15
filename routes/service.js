module.exports = function(app) {

    const service = require('../controllers/ctlService.js');
    app.post  ('/service/',           service.nuevoService);
    app.get   ('/service/',           service.obtenerServices);
    app.get   ('/service/:id_epo',    service.obtenerService);
    app.put   ('/service/:id_epo',    service.actualizarService);
    app.delete('/service/:id_epo',    service.eliminarService);
    app.get   ('/service/limit/:val', service.obtenerServicesLimit);
    app.get   ('/service/coincidencia/:palabra', service.buscarCoincidencia);
    app.get   ('/service/atributos/buscar/',     service.buscarPorAtributo);
}
