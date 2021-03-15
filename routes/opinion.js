module.exports = function(app) {

    const opinion = require('../controllers/ctlOpinion.js');
    app.post  ('/opinion/',           opinion.nuevoOpinion);
    app.get   ('/opinion/',           opinion.obtenerOpinions);
    app.get   ('/opinion/:id_epo',    opinion.obtenerOpinion);
    app.put   ('/opinion/:id_epo',    opinion.actualizarOpinion);
    app.delete('/opinion/:id_epo',    opinion.eliminarOpinion);
    app.get   ('/opinion/limit/:val', opinion.obtenerOpinionsLimit);
    app.get   ('/opinion/coincidencia/:palabra', opinion.buscarCoincidencia);
    app.get   ('/opinion/atributos/buscar/',     opinion.buscarPorAtributo);
}
