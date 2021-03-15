module.exports = function(app) {
    const roomDetail = require('../controllers/ctlRoomDetail.js');
    app.post  ('/roomDetail/',           roomDetail.nuevoRoomDetail);
    app.get   ('/roomDetail/',           roomDetail.obtenerRoomDetails);
    app.get   ('/roomDetail/:id_epo',    roomDetail.obtenerRoomDetail);
    app.put   ('/roomDetail/:id_epo',    roomDetail.actualizarRoomDetail);
    app.delete('/roomDetail/:id_epo',    roomDetail.eliminarRoomDetail);
    app.get   ('/roomDetail/limit/:val', roomDetail.obtenerRoomDetailsLimit);
    app.get   ('/roomDetail/coincidencia/:palabra', roomDetail.buscarCoincidencia);
    app.get   ('/roomDetail/atributos/buscar/',     roomDetail.buscarPorAtributo);
}
