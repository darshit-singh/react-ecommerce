const express = require('express')
const products = require('./data/products')
const dotenv = require('dotenv')

dotenv.config();

const app = express()

//api for all products
app.get('/api/products', (req, res) => {
    res.send(products)
})

// api for just one product
// you use req if you wanna access the URL and after : are the params
app.get('/api/products/:id', (req, res) => {
    const item = products.find(p => p._id === req.params.id)
    res.send(item) 
})

app.listen(5000, console.log('App is running on port 5000'))