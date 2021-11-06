const home = (req, res) => {
    return res.send("This is Shoppers API/n the routes are<br>      /api/product<br>      /api/users<br>      /api/orders")
}

module.exports = home