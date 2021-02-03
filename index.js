const app = require('express')()
const db = require('./config/db')
const consign = require('consign')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.get('/', (req,res) => {
    res.send('OK!')
})

app.listen(process.env.PORT || 3000, () => {
    console.log("executando")
} )
