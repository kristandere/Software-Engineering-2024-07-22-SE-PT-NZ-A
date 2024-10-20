class Logger {
    static log(message, id, result) {
        console.log(`[Logger] ID: ${id}, Message: ${message}, Result: ${result}`);
    }
}

module.exports = Logger;