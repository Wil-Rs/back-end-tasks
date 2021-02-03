//const { authSecret } = require('../.env')
// teste heroku
const authSecret = process.env.SECRETAUTH
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password){
            return res.status(400).send('Dados incompletos')
        }
    

        const user = await app.db('users')
            .whereRaw( "LOWER(email) = LOWER(?)" ,req.body.email) // colocar email
            .first()
            .catch(err => res.status(400).json(err)) // <====

        if(user){
            bcrypt.compare( req.body.password, user.password, (err, isMath) => {
                if(err || !isMath) {
                    return res.status(401).send()
                }

                const payload = { id: user.id}
                res.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecret),
                })

            } )
        }  else {
        res.status(400).send('usuario nao cadastrado')
        }
    }

    return { signin }
}
