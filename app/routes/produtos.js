module.exports = function (app) {
    app.get('/produtos', function (req, res) {

        // Conexão com o banco de dados.
        var connection = app.infra.connectionFactory();
        
        // Consulta no banco de dados.
        connection.query('SELECT * FROM livros', function(err, results){
            res.render('produtos/lista',{lista:results});
        });

        // Encerra conexão com o banco de dados.
        connection.end();
    });
}