const list = [];

let addMessage = (message) => {
    list.push(message);
}

let getMessage = () => {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    //get
    //update
    //delete
}