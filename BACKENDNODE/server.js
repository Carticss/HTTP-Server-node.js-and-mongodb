const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

//Create express instance
let app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
    console.log(req.headers);
    res.setHeader("custom-header","Default Value");
    response.succes(req, res, 'Lista de Mensajes');
});

router.post('/message', (req, res) => {
    console.log(req.body.error);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error Inesperado', 500, 'Es una simulación de un error');
    }else {
        response.succes(req, res, 'Creado Correctamente', 201);
    }    
});

app.use('/app', express.static('./public/index.html'));

app.listen(3000);
console.log('App is listenning on http://localhost:3000');
