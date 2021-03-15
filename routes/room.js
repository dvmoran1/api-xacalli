module.exports = function(app) {

    const room = require('../controllers/ctlRoom.js');
    app.post  ('/room/',           room.nuevoRoom);
    app.get   ('/room/',           room.obtenerRooms);
    app.get   ('/room/:id_epo',    room.obtenerRoom);
    app.put   ('/room/:id_epo',    room.actualizarRoom);
    app.delete('/room/:id_epo',    room.eliminarRoom);
    app.get   ('/room/limit/:val', room.obtenerRoomsLimit);
    app.get   ('/room/coincidencia/:palabra', room.buscarCoincidencia);
    app.get   ('/room/atributos/buscar/',     room.buscarPorAtributo);
}
