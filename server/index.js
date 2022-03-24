const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send('Hello, Blog!')
}) 

app.listen(port, () =>{
    console.log(`Server run on ${port}`)
})