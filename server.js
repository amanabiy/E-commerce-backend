const express = require('express');
const mongoose = require('mongoose');
const user_route = require('./route/user_route')
const product_router = require('./route/product_route')
const cart_router = require('./route/carts_route')
const order_router = require('./route/orders_route')
const home_route = require('./route/home_route')
const appError = require('./utility/appError')
const error_handler = require('./controller/error_handler')
const path = require('path')
const cors = require('cors')


const app = express();


//console.log(PATH_MAIN)
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// allow CORS
app.use(cors());
app.use(express.json());

// connecting to the database
const DB_URL = process.env.DB_URL
console.log(DB_URL)
mongoose.connect(DB_URL).then(() => {
    console.log("connected to the database successfully")
}).catch((error) => {
    console.log("erro is this ==========\n\n\n", error)
    process.exit(1)
});

// routes
app.get('/', home_route)
app.use('/api/products', product_router);
app.use('/api/carts', cart_router);
app.use('/api/users', user_route);
app.use('/api/orders', order_router);




// handle all exceptions
app.all('*', (req, res, next) => {
    const error = new appError(404, `${req.originalUrl} can't find it`)
    next(error);
})

// error handling
app.use(error_handler)

// export app for testing purpose
module.exports = app
