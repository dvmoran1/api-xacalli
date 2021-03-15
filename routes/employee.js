
module.exports = function(app) {

    const employee = require('../controllers/ctlEmployee.js');
    app.post('/employee/',          employee.nuevoEmpleado);
    app.get('/employee/',           employee.obtenerEmpleados);
    app.get('/employee/:id_epo',    employee.obtenerEmpleado);
    app.put('/employee/:id_epo',    employee.actualizarEmpleado);
    app.delete('/employee/:id_epo', employee.eliminarEmpleado);
    app.get('/employee/limit/:val', employee.obtenerEmpleadosLimit);
   // app.get('/employee/coin/:nombre/:apellido/', employee.buscarCoincidencia);
   // app.get('/atributo/:val', employee.buscarPorAtributo);
}
