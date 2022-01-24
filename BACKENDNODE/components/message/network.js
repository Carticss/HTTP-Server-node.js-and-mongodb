const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    res.setHeader("custom-header","Default Value");
    response.succes(req, res, 'Lista de Mensajes');
});

router.post('/', (req, res) => {
    console.log(req.body.error);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error Inesperado', 500, 'Es una simulación de un error');
    }else {
        response.succes(req, res, 'Creado Correctamente', 201);
    }    
});

module.exports = router;