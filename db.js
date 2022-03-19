const db = require('mongoose');
require('dotenv').config()

db.Promise = global.Promise;
let connect = () => {
    db.connect(process.env.DB_URL, {
        useNewUrlParser: true,
    });
    console.log('[db] Conectada con exito');
}

