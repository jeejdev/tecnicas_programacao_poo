const express = require('express')
const conexao = require('./db/conexao')
const flash = require('express-flash')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

//Rotas - invocando depois usando a rota
const UsersRoutes = require('./routes/UserRoutes')
const ProductRoutes = require('./routes/ProductRoutes')
const ServiceRoutes = require('./routes/ServiceRoutes')
const PetRoutes = require('./routes/PetRoutes')
const RequestServiceRoutes = require('./routes/RequestServiceRoutes')
const PurchaseProductRoutes = require('./routes/PurchaseProductRoutes')
const TutorPetRoutes = require('./routes/TutorPetRoutes')

//Body Parse
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//CORS
app.use(cors({ credentials: false, origin: 'http://localhost:5000' }))

//Usando Rotas
app.use('/user', UsersRoutes)
app.use('/product', ProductRoutes)
app.use('/service', ServiceRoutes)
app.use('/pet', PetRoutes)
app.use('/reqservice', RequestServiceRoutes)
app.use('/purchase', PurchaseProductRoutes)
app.use('/tutor', TutorPetRoutes)

//Mensagens com flash
app.use(flash())

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})