var mysql = require('mysql');

function createDBConnection() {
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'test',
            database: 'projetoNode'
        });
    }
    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'test',
            database: 'projetoNode_test'
        });
    }
}

// Wrapper.
module.exports = function () {
    return createDBConnection;
}