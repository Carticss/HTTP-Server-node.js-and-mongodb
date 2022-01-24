const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
//const router = require('./components/message/network');


//Create express instance
//app.use(router);
let app = express();
app.use(bodyParser.json());
app.use('/app', express.static('./public/index.html'));

router(app);

app.listen(3000);
console.log('App is listenning on http://localhost:3000');
