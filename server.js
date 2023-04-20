const express = require('express')

const app = express()

// body parser
app.use(express.json())
app.use(express.urlencoded())

// arquivos de rotas
const auth = require('./routes/auth')

// monta as rotas
app.use('/', auth)

const PORT = 8143

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`))

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)

  server.close(() => process.exit(1))
})
