// Middleware function acts as a gatekeeper, ensuring that only authenticated users can 
// access certain routes or resources. 
const auth = (req, res, next) => {
    if (req.session.login) {
        next()
    } else {
        res.redirect('/login')
    }
}
module.exports = auth;