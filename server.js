const express = require('express')
const dotenv = require('dotenv')

// Carrega variáveis de ambiente
dotenv.config({ path: './config/config.env' })

const app = express()

// body parser
app.use(express.json())
app.use(express.urlencoded())

// arquivos de rotas
const auth = require('./routes/auth')

// monta as rotas
app.use('/', auth)

const PORT = process.env.PORT || 8143

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`))

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)

  server.close(() => process.exit(1))
})
