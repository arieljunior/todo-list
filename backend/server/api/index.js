const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const routersTask = require('./routers/task')
const cors = require('cors')

app.use(cors())
app.use(bodyParse.json())

app.use('/api/task', routersTask)

app.listen(8000, ()=> console.log('API rodando'))