var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'test',
        database: 'projetoNode'
    });
}

module.exports = function(){
    return createDBConnection;
}