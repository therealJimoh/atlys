const express = require('express')
const app = express();
const cats = require('./routes/cat')
const port = 3001

// middleware
app.use(express.json())


// routes
app.get('/', (req, res) => {
    res.send('Welcome to Atlys Challenge')
})
app.use('/api/v1/cats', cats)







app.listen(port, console.log(`Server Listening on ${port}...`))