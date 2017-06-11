module.exports = function (app){
    app.get('/produtos', function (req, res) {

        // Conexão com o banco de dados.
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);

        // Renderiza produtos do banco de dados.
        produtosBanco.lista(function(err, results){
            res.render('produtos/lista',{lista:results});
        });

        // Encerra conexão com o banco de dados.
        connection.end();
    });

    app.get('produtos/remove', function(){
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.connectionFactory;
        var produto = produtosBanco.carrega(id,callback);

        if (produto){
            produtosBanco.remove(produto,callback);
        }
    });
}