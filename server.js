const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const filmsRouter = require('./routers/films')
const notFound = require('./middleware/errorHandler')


app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173'
}))


app.get('/', (req, res) => {
    res.send('SERVER IS ACTIVE')
})
app.use('/movies', filmsRouter)
app.listen(port, () => {
    console.log(`app run in link http://localhost:${port}`)
})

app.use(notFound)