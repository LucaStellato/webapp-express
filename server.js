const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
    res.send('SERVER IS ACTIVE')
})

app.listen(port, () => {
    console.log(`app run in link http://localhost:${port}`)
})