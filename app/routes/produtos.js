var connectionFactory = require('../infra/connectionFactory');

module.exports = function (app) {
    app.get('/produtos', function (req, res) {

        // Conexão com o banco de dados.
        var connection = connectionFactory();
        
        // Consulta no banco de dados.
        connection.query('SELECT * FROM livros', function(err, results){
            res.render('produtos/lista',{lista:results});
        });

        // Encerra conexão com o banco de dados.
        connection.end();
    });
}