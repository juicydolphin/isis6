const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/error',(req,res)=> {
    res.status(500).send('ERROR');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})