/**
 * @description authRoutes file will contains all the routes and api routes
 */
const passport = require('passport');

module.exports = (app) => {
    app.post('/api/login', function(req, res, next) {
        if(!req.body.username) {
            return res.status(404).send({
                error: {
                    username: 'Username can\'t be blank'
                }
            })
        }
        if(!req.body.password) {
            return res.status(404).send({
                error: {
                    password: 'Password can\'t be blank'
                }
            })
        }
        passport.authenticate('local', {session: false}, function(err, user, info){
            if (err) { return res.status(501).send(err);}
            if (user) {
                return res.send({user: user });
            } else {
                return res.status(422).json(info);
            }
        })(req,res,next)
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};