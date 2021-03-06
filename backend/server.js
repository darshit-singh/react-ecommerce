import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config();

connectDB();

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

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.gray.bgYellow))
