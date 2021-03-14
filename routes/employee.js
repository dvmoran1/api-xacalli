
module.exports = function(app) {
 
    const employee = require('../controllers/ctlEmployee.js');
 
    app.post('/', employee.nuevoEmpleado);
 
    app.get('/', employee.obtenerEmpleados);
 
    app.get('/:id_epo', employee.obtenerEmpleado);
 
    app.put('/:id_epo', employee.actualizarEmpleado);
 
    app.delete('/:id_epo', employee.eliminarEmpleado);

    app.get('/coin/:nombre', employee.buscarCoincidencia);
    app.get('/limit/:val', employee.obtenerEmpleadosLimit);
    app.get('/atributo/:val', employee.buscarPorAtributo);

    
    




}
