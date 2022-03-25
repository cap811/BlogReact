const express = require('express')
const app = express()
const port = process.env.PORT || 80;
const morgan = require('morgan')
// Middleware 

app.get('/', (req, res) => {
    res.send('Hello, Blog!')
}) 

app.listen(port, err => {
    if(err) throw err;
    console.log(`Server run on ${port}`);
})