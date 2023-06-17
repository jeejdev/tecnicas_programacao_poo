const express = require('express')
const conexao = require('./db/conexao')
const flash = require('express-flash')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

//Rotas - invocando depois usando a rota
const UsersRoutes = require ('./routes/UserRoutes')

//Body Parse
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//CORS
app.use(cors({ credentials: false, origin: 'http://localhost:5000' }))

//Usando Rotas
app.use('/user', UsersRoutes)

//Mensagens com flash
app.use(flash())

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})