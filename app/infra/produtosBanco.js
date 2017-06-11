module.exports = function (connection) {
    return function (connection) {

        // Lista produtos do banco de dados.
        this.lista = function (callback) {
            connection.query('SELECT * FROM livros', callback);
        }

        // Remove produtos do banco de dados.
        this.remove = function (callback) {
            connection.query('SELECT * FROM livros', callback);
        }

        return this;
    }
}