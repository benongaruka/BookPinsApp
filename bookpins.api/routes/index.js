const express = require('express');
const router = express.Router();
var jwt = require('express-jwt');

//configure express for router authentication by telling it the secret and property on req that has the token
var auth = jwt({
    secret: 'MY_SECRET',
    requestProperty: 'payload',
    algorithms: ['sha512']
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

//profile
router.get('/profile', auth, ctrlProfile.profileRead);

//authentication
router.post('/register', ctrlAuth.register);
router.get('/login', ctrlAuth.login);

module.exports = router;