const express = require('express');
const server = express();

// Pegar o DB
const database = require('./database/db')

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


    // pegar os dados do DB 
    database.all(`
    SELECT * FROM places
`, function (err, rows) {
    if(err){
        return console.log("Erro: \n${err}")
    }

    console.log(`Aqui estão os seus registros: `)
    console.log(rows)

    let total = rows.length

    return res.render('search-result.html', {places: rows, total: total})
    
    })

})

// Ligar o servidor
server.listen(3000);
console.log('Executando o servidor...')


