const express = require('express')
const path = require('path')

const app = express()

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
app.use('/', express.static(path.join(__dirname, 'public')))

const { PORT = 3000 } = process.env
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
