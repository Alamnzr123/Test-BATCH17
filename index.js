import express from 'express';
import Router from './src/router/index.js';
const app = express()
const port = 3000
app.use(express.json())
app.use(Router);

app.get('/', (req, res) => {
    res.send('Hello BATCH17')
})

app.get('/login', (req, res) => {
    res.send('Anda sudah login')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})