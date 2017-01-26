var express = require('express');
var router = express.Router();
var models = require('.../server/models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.User.findAll({}).then(function(users) {
        res.render('user/index', {
            title: 'fezbook',
            users: users
        });
    });
});

router.get('/new', function(req, res, next) {
    res.render('users/new', { title: 'new fazbook user' });
});

router.post('/', function(req, res, next) {
    models.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dob: req.body.dob
    }).then(function() {
        res.redirect('/users')
    });
});
module.exports = router;