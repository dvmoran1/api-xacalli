
module.exports = function(app) {

    const path = require('path')
    
    app.get('/', (req,res)=>{
        res.sendFile(path.join(__dirname, '../index.html'));
    });

    const employee = require('../controllers/ctlEmployee.js');
    app.post  ('/employee/',           employee.nuevoEmpleado);
    app.get   ('/employee/',           employee.obtenerEmpleados);
    app.get   ('/employee/:id_epo',    employee.obtenerEmpleado);
    app.put   ('/employee/:id_epo',    employee.actualizarEmpleado);
    app.delete('/employee/:id_epo',    employee.eliminarEmpleado);
    app.get   ('/employee/limit/:val', employee.obtenerEmpleadosLimit);
    app.get   ('/employee/coincidencia/:palabra', employee.buscarCoincidencia);
    app.get   ('/employee/atributos/buscar/',     employee.buscarPorAtributo);
}

// const router = require('express').Router();
// const {
//     nuevoEmpleado,
//     obtenerEmpleados,
//     obtenerEmpleado,
//     actualizarEmpleado,
//     eliminarEmpleado,
//     obtenerEmpleadosLimit,
//     buscarCoincidencia,
//     buscarPorAtributo,

// } = require('../controllers/ctlEmployee.js')

// router.post('/', nuevoEmpleado);
// router.get('/',obtenerEmpleados);
// router.get('/:id_epo', obtenerEmpleado);
// router.put('/:id_epo', actualizarEmpleado);
// router.delete('/:id_epo', eliminarEmpleado);
// router.get('/limit/:val', obtenerEmpleadosLimit);
// router.get('/:palabra', buscarCoincidencia);
// router.get('/atributos/buscar/', buscarPorAtributo);

// module.exports = router;
