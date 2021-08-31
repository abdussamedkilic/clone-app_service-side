const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('under messages tag database work with messages table<br/>'+
    'if u go /allMessages u get all messages<br/>'+
    'if u go /allMessages/? u will get only entered message<br/>'+
    'if u go /addMessage u post a message<br/>'+
    'if u go /updateMessages/? u update entered Message<br/>'+
    'if u go /deleteMessages/? u delete entered messages<br/>');
});

module.exports = router;