module.exports = function (app){
    app.get('/produtos', function (req, res) {

        // Conexão com o banco de dados.
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        // Renderiza produtos do banco de dados.
        produtosDAO.lista(function(err, results){
            res.render('produtos/lista',{lista:results});
        });

        // Encerra conexão com o banco de dados.
        connection.end();
    });

    app.get('/produtos/form',function(req,res){
        res.render('produtos/form');
    })

    app.post('/produtos/salva',function(req,res){
        var produto = req.body;
        console.log(produto);
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto,function(erros,resultados){
            res.render('produtos/lista');
        });
    });
}