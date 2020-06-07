const express = require('express');
const server = express();

// Configurar a pasta pública
server.use(express.static('public'))

// Utilizando a template engine
const numjucks = require('nunjucks')
numjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Configurar os caminhos da aplicação

// Página Inicial
/**
 * req => requisão ou pedido
 * res => resposta ao pedido
 */
server.get('/', (req, res) => {
    res.render('index.html', {
        title: 'Seu marketplace de coleta de resíduos',
    })
})

server.get('/create-point', (req, res) => {
    res.render('create-point.html')
})

server.get('/search-results', (req, res) => {
    res.render('search-result.html')
})

// Ligar o servidor
server.listen(3000);
console.log('Executando o servidor...')

