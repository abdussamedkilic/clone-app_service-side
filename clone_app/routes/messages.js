const express = require('express');
const { jsonParser, urlencodedParser } = require('../config/bodyparser');
const router = express.Router();

const db = require('../config/database');
const Messages = require('../models/Messages');

router.get('/', (req, res) => {
    res.send('under messages tag database work with messages table<br/>' +
        'if u go /all u get all messages<br/>' +
        'if u go /all/:id u get a specific message from id<br/>' +
        'if u go /add u post a message<br/>' +
        'if u go /delete/:id u delete specific message from id<br/>');
});

// get all Messages
router.get('/all', (req, res) => {
    Messages.findAll()
        .then(messages => {
            res.send(messages);
        })
        .catch(err => console.log(err));
});

// get specific Message from id
router.get('/all/:id', (req, res) => {
    const id = req.params.id;

    Messages.findOne({ where: { id } })
        .then(message => {
            res.send(message);
        })
        .catch(err => console.log(err));
});

// delete specific Message from id
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    Messages.findOne({ where: { id } })
        .then(message => {
            message.destroy();
            res.send(`id:${id} message deleted!`);
        })
        .catch(err => console.log(err));
});

// add Message
router.post('/add', jsonParser, (req, res) => { // ekstradan uid ve pid'yi al 

    let { message_uID, message_pID, message_content } = req.body;
    if (message_uID != undefined
        || message_pID != undefined
        || message_content != undefined) {

        Messages.create({
            message_uID,
            message_pID,
            message_content
        })
            .then(message => res.redirect('/messages/all'))
            .catch(err => console.log(err));
    } else {
        res.send("Error");
    }
});

module.exports = router;