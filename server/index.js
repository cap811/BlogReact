const express = require('express')
const app = express()
const port = 80
const morgan = require('morgan')
// Middleware 
app.use(morgan)


app.get('/', (req, res) => {
    res.send('Hello, Blog!')
}) 

app.listen(port, () =>{
    console.log(`Server run on ${port}`)
})