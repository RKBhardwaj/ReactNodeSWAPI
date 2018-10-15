/**
 * @description usersRoutes will contains all the routes and its handler
 */
const requireLogin = require('../middlewares/requireLogin');
const KEYS = require('../config/contants');
const axios = require('axios');

module.exports = (app) => {
    /**
     * @description api to get list of all the users
     */
    app.get('/api/users', (req, res) => {
        axios.get(KEYS.BASE_URL + 'people')
            .then(function(response) {
                res.send(response.data);
            })
            .catch(function(error){
                res.send({});
            });
    });

    /**
     * @description api to get user details
     */
    app.get('/api/user/:userId', (req, res) => {
        const userId = req.params.userId;
        if (userId) {
            axios.get(KEYS.BASE_URL + 'people/' + userId)
            .then(function(response) {
                res.send(response.data);
            })
            .catch(function(error){
                res.send({});
            });
        } else {
            res.send({});
        }
    });
};