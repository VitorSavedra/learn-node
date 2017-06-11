module.exports = function (app){
    app.get('/produtos', function (req, res) {

        // Conexão com o banco de dados.
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        // Renderiza produtos do banco de dados.
        produtosBanco.lista(function(err, results){
            res.render('produtos/lista',{lista:results});
        });

        // Encerra conexão com o banco de dados.
        connection.end();
    });

    app.get('/produtos/form',function(req,res){
        res.render('produtos/form');
    })
}