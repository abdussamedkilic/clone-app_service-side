const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('under owner tag database work with owners table<br/>'+
    'if u go /allOwners u get all owners<br/>'+
    'if u go /allOwners/? u will get only entered owner<br/>'+
    'if u go /addOwner u post a owner<br/>'+
    'if u go /deleteOwners/? u delete entered owner<br/>');
});

module.exports = router;