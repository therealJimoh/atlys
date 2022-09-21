const express = require('express')
const app = express();
const redis = require('redis')
const cats = require('./routes/cat')

const PORT = 3001
const REDIS_PORT = 6379

const client = redis.createClient(REDIS_PORT)

// middleware
app.use(express.json())


// routes
app.get('/', (req, res) => {
    res.send('Welcome to Atlys Challenge')
})
app.use('/api/v1/cats', cats)




app.listen(port, console.log(`Server Listening on ${PORT}...`))