var express = require('express');
var server = express();
// Pegar o DB
var database = require('./database/db');
// Configurar a pasta pública
server.use(express.static('public'));
// Utilizando a template engine
var numjucks = require('nunjucks');
numjucks.configure('src/views', {
    express: server,
    noCache: true
});
// Configurar os caminhos da aplicação
// Página Inicial
/**
 * req => requisão ou pedido
 * res => resposta ao pedido
 */
server.get('/', function (req, res) {
    res.render('index.html', {
        title: 'Seu marketplace de coleta de resíduos'
    });
});
server.get('/create-point', function (req, res) {
    res.render('create-point.html');
});
server.get('/search-results', function (req, res) {
    // pegar os dados do DB 
    database.all("\n    SELECT * FROM places\n", function (err, rows) {
        if (err) {
            return console.log("Erro: \n${err}");
        }
        console.log("Aqui est\u00E3o os seus registros: ");
        console.log(rows);
        var total = rows.length;
        return res.render('search-result.html', { places: rows, total: total });
    });
});
// Ligar o servidor
server.listen(3000);
console.log('Executando o servidor...');


