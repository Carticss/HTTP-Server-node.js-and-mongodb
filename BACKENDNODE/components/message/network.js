const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    controller.getMessages()
        .then((messageList) => {
            response.succes(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Inesperado', 500, e);
        });
});

router.post('/', (req, res) => {
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.succes(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Información invalida', 400, 'Error en el controlador');
        }); 
});

module.exports = router;