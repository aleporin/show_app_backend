const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()
// const middleware = require('./middleware')
// const UserRouter = require('./routes/UserRouter')
const ShowRouter = require('./routes/ShowRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
// app.use(middleware.stripToken)
app.use(express.urlencoded({ extended: true }))

// Have to talk about best routing but for now im just making sure they work

// app.use('/api/user', UserRouter)
app.use('/api/show', ShowRouter)
// app.use()
// app.use()

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
