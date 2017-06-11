module.exports = function (app){
    app.get('/produtos', function (req, res) {

        // Conexão com o banco de dados.
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco;

        // Consulta no banco de dados.
        produtosBanco.lista(connection, function(err, results){
            res.render('produtos/lista',{lista:results});
        });

        // Encerra conexão com o banco de dados.
        connection.end();
    });
}