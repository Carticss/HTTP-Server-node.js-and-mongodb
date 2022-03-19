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

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then(data => {
            response.succes(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e);
        });
});

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.succes(req, res, `Mensaje ${req.params.id} eliminado`, 200)
        })
        .catch (e => {
            response.error(req, res, 'Error Interno', 500, e);
        })
});

module.exports = router;