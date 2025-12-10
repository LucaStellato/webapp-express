const express = require('express')
const app = express()
const port = 3000
const filmsRouter = require('./routers/films')


app.use(express.json())

app.get('/', (req, res) => {
    res.send('SERVER IS ACTIVE')
})
app.use('/movies', filmsRouter)
app.listen(port, () => {
    console.log(`app run in link http://localhost:${port}`)
})