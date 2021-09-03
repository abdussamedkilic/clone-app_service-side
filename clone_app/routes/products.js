const express = require('express');
const { jsonParser, urlencodedParser } = require('../config/bodyparser');
const router = express.Router();

const db = require('../config/database');
const Products = require('../models/Products');

router.get('/', (req, res) => {
    res.send('under products tag database work with products table<br/>'+
    'if u go /all u get all products<br/>'+
    'if u go /all/? u will get only entered product<br/>'+
    'if u go /add u post a product<br/>'+
    'if u go /update/? u update entered product<br/>'+
    'if u go /delete/? u delete entered product<br/>');
});

// get all Products
router.get('/all', (req, res) => {
    Products.findAll()
        .then(Products => {
            res.send(Products);
        })
        .catch(err => console.log(err));
});

// get specific Product from id
router.get('/all/:id', (req, res) => {
    const id = req.params.id;

    Products.findOne({where: {id}})
        .then(product => {
            res.send(product);
        })
        .catch(err => console.log(err));
});

// update specific Product from id // no need to update owner uid
router.put('/update/:id', jsonParser, (req, res) => {
    const id = req.params.id;
    const { product_name, product_price, product_year, product_about } = req.body;
    Products.findOne({where: {id}})
        .then(p => {
            p.product_name = product_name;
            p.product_price = product_price;
            p.product_year = product_year;
            p.product_about = product_about;
            p.save();
            res.json(`id:${id} Product has been succesfully updated !`);
        })
        .catch(err => console.log(err));
});

// delete specific Product from id
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    Products.findOne({where: {id}})
        .then(product => {
            product.destroy();
            res.send(`id:${id} product deleted!`);
        })
        .catch(err => console.log(err));
});

// add Products
router.post('/add', jsonParser, (req, res) => { // ekstradan uid ve pid'yi al 
    
    let { product_name, product_price, product_year, product_about, product_uID, } = req.body; 
     if (product_name != undefined 
        || product_price != undefined 
        || product_year != undefined 
        || product_about != undefined
        || product_uID != undefined
        ) {
        // add product
        Products.create({ // fotoğraf veya fotoğraflar için url veya url'leri tutacak bir string eklenecek
            product_name,
            product_price,
            product_year,
            product_about,
            product_uID
        })
            .then(product => res.redirect('/products/all'))
            .catch(err => console.log(err));
    }else{
        res.send("Error");
    }  
});

module.exports = router;