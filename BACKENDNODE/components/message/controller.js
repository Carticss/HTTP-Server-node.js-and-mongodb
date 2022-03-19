const store = require('./store');

let addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage);

        resolve(fullMessage);
    })
}

let getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

let updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        console.log(id, message);
        if (!id || !message) {
            reject('Invalid Data');
            return false;
        }
        const result = await store.updateMessage(id, message);
        resolve(result);
    })
}

let deleteMessage = (id) => {
    return new Promise((resolve, reject) => {
        if(!id){
            reject('Id invalido')
            return false;
        }
        store.remove(id);           
        resolve();
    }) 
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}