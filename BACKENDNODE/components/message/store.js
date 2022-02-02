const db = require('mongoose');
const Model = require('./model');
require('dotenv').config()

db.Promise = global.Promise;
db.connect(process.env.DB_URL, {
    useNewUrlParser: true,
});
console.log('[db] Conectada con exito');

let addMessage = (message) => {
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

let getMessage = async () => {
    //return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    //get
    //update
    //delete
}