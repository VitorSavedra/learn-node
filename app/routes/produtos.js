module.exports = function (app) {
    app.get('/produtos', function (req, res) {

        // Invoca modulo MySQL.
        var mysql = require('mysql');

        // Conexão com o banco de dados.
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'projetoNode'
        });
        
        // Consulta no banco de dados.
        connection.query('SELECT * FROM livros', function(err, results){
            res.send(results);
        });

        connection.end();
    });
}