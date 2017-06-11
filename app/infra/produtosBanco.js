module.exports = function () {
    this.lista = function (connection, callback) {
        connection.query('SELECT * FROM produtos', callback);
    }
    return this;
}