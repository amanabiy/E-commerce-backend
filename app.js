const app = require('./server')

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`)
})
