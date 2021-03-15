
module.exports = function(app) {

    const client = require('../controllers/ctlClient.js');
    app.post  ('/client/',           client.nuevoCliente);
    app.get   ('/client/',           client.obtenerClientes);
    app.get   ('/client/:id_epo',    client.obtenerCliente);
    app.put   ('/client/:id_epo',    client.actualizarCliente);
    app.delete('/client/:id_epo',    client.eliminarCliente);
    app.get   ('/client/limit/:val', client.obtenerClientesLimit);
    app.get   ('/client/coincidencia/:palabra', client.buscarCoincidencia);
    app.get   ('/client/atributos/buscar/',     client.buscarPorAtributo);
}
