const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// app.use() // this is where routes will go /api/user, UserRouter
// app.use()
// app.use()
// app.use()

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
