const express = require('express');
const { jsonParser, urlencodedParser } = require('../config/bodyparser');

const router = express.Router();
const db = require('../config/database');
const Users = require('../models/Users');


router.get('/', (req, res) => {
    res.send('under users tag database work with users table<br/>' +
        'if u go /all u get all users<br/>' +
        'if u go /all/:id u will get only entered user<br/>' +
        'if u go /add u post a user<br/>' +
        'if u go /update/? u update entered user<br/>' +
        'if u go /delete/? u delete entered user<br/>');
});

// get all users
router.get('/all', (req, res) => {
    Users.findAll()
        .then(users => {
            /* console.log(users);
            res.sendStatus(200); */
            res.send(users);
        })
        .catch(err => console.log(err));
});

// get specific user from id
router.get('/all/:id', (req, res) => {
    const id = req.params.id;

    Users.findOne({where: {id}})
        .then(user => {
            res.send(user);
        })
        .catch(err => console.log(err));
});

// update specific user from id
router.put('/update/:id', jsonParser, (req, res) => {
    const id = req.params.id;
    const { user_name, user_email, user_password } = req.body;
    Users.findOne({where: {id}})
        .then(u => {
            u.user_name = user_name;
            u.user_email = user_email;
            u.user_password = user_password;
            u.save();
            res.json(`id:${id} user has been succesfully updated !`);
        })
        .catch(err => console.log(err));
});

// delete specific user from id
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    Users.findOne({where: {id}})
        .then(user => {
            user.destroy();
            res.send(`id:${id} User deleted!`);
        })
        .catch(err => console.log(err));
});

// add user
router.post('/add', jsonParser, (req, res) => {
    let { user_name, user_email, user_password } = req.body; 
    if (user_name != undefined || user_email != undefined || user_password != undefined) {
        Users.create({
            user_name,
            user_email,
            user_password,
        })
            .then(user => res.redirect('/users/all')) 
            .catch(err => console.log(err));
    }else{
        res.send("Error");
    }
});

module.exports = router;