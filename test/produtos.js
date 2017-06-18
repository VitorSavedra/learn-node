var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function () {

    beforeEach(function (done) {
        var conn = express.infra.connectionFactory();
        conn.query("DELETE FROM livros", function (erro, result) {
            if (!erro) {
                done();
            }
        })
    });

    afterEach(function (done) {
        var conn = express.infra.connectionFactory();
        conn.query("DELETE FROM livros", function (erro, result) {
            if (!erro) {
                done();
            }
        })
    });

    it('#Listagem JSON', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200, done);
    });

    it('#Listagem HTML', function (done) {
        request.get('/produtos')
            .set('Accept', 'text/html')
            .expect('Content-type', /html/)
            .expect(200, done);
    });

    it('#Cadastro de novo produto com dados inválidos', function (done) {
        request.post('/produtos')
            .send({
                titulo: '',
                preco: '100,30',
                descricao: 'Novo livro'
            })
            .expect(400, done);
    });

    it('#Cadastro de novo produto com dados válidos', function (done) {
        request.post('/produtos')
            .send({
                titulo: 'Título Teste',
                preco: 100.50,
                descricao: 'Novo livro'
            })
            .expect(302, done);
    });

});