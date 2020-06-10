const express = require('express');
const server = express();

// Pegar o DB
const database = require('./database/db')

// Configurar a pasta pública
server.use(express.static('public'))

// Habilitar o uso do body no post
server.use(express.urlencoded({ extended: true }))

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
    // req.query => Query strings da url
    console.log(req.query)

    res.render('create-point.html')
})

server.get('/search-results', (req, res) => {

    const search = req.query.search

    if (search == ''){
        /**
         * Pesquisa Vazia
         */
        return res.render('search-result.html', {total: 0})
    }


    // pegar os dados do DB 
    database.all(`
    SELECT * FROM places WHERE city LIKE '%${search}%'
`, function (err, rows) {
    if(err){
        return console.log(`Erro: \n${err}`)
    }

    console.log(`Aqui estão os seus registros: `)
    console.log(rows)

    let total = rows.length

    return res.render('search-result.html', {places: rows, total: total})
    
    })

})

server.post('/save-point', (req, res) => {
    // req.body => corpo da requisição

    console.log(req.body)

    const query = `
    INSERT INTO places (
        name,
        image,
        addres,
        addres2,
        state,
        city,
        items
    ) 
    VALUES (?,?,?,?,?,?,?);
    `

    const value = [
        req.body.name,
        req.body.image,
        req.body.addres,
        req.body.addres2,
        req.body.state,
        req.body.city,
        req.body.itens
    ]

    function afterInsertData (err) {
        if(err){
            
            console.log(`Erro: \n${err}`)
            return res.send('Erro no cadastro') 
        }
            
        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render('create-point.html', {saved : true})
    }

    database.run(query, value, afterInsertData)

    
})

// Ligar o servidor
server.listen(3000);
console.log('Executando o servidor...')


