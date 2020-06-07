// Importar a depêndencia do sqlite
const sqlite = require('sqlite3').verbose()

// Iniciar o objeto que fará operações no banco de dados
const db = new sqlite.Database('./src/database/database.db')
let num = Math.floor(Math.random() * 2000 + 1)

module.exports = db

// Utilizar o objeto de banco de dados para as operações
db.serialize(() => {
    // Com comandos SQL

    // // 1 Criar uma tabela 
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         image TEXT,
    //         addres TEXT,
    //         addres2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    // // 2 Inserir os dados na tabela
    // const query = `
    // INSERT INTO places (
    //     name,
    //     image,
    //     addres,
    //     addres2,
    //     state,
    //     city,
    //     items
    // ) 
    // VALUES (?,?,?,?,?,?,?);
    // `
    // num = Math.floor(Math.random() * 2000 + 1)

    // const value = [
    //     "Colectoria", 
    //     `https://picsum.photos/id/${num}/200/300`,
    //     "Guilherme Gembala, Jardim América",
    //     "N° 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData (err) {
    //     if(err){
    //         return console.log("Erro: \n${err}")
    //     }
            
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, value, afterInsertData)

    // // 3 Consultar os dados na tabela

    // db.all(`
    //     SELECT * FROM places
    // `, function (err, rows) {
    //     if(err){
    //         return console.log("Erro: \n${err}")
    //     }

    //     console.log(`Aqui estão os seus registros: `)
    //     console.log(rows)
    // })



    // 4 Deletar um dado na tabela
    db.run('DELETE FROM places WHERE id >= ?', [20], function (err){
        if(err){
            return console.log("Erro: \n${err}")
        }

        console.log('Dados deletados com sucesso')
            
    })

    db.all(`
    SELECT * FROM places
`, function (err, rows) {
    if(err){
        return console.log("Erro: \n${err}")
    }

    console.log(`Aqui estão os seus registros: `)
    console.log(rows)
})




})


