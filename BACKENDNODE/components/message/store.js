const Model = require('./model');

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

let updateMessage = async (id, message) => {
    const foundMessage = await Model.findOne({
        _id: id
    })
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

let removeMessage = async (id) => {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateMessage: updateMessage,
    remove: removeMessage,
    //get
    //update
    //delete
}