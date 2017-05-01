/**
 * Created by Lahiru Senadheera on 3/25/2017.
 */
var express = require('express');
var router = express.Router();
//var multer = require('multer');
//var upload = multer({dest: 'public/images/uploads/'});
var unit = require('../models/unit');
var item = require('../models/item');
var category = require('../models/category');

var arrayItems = new Array();

router.get('/', function(req, res, next) {
    unit.find()
        .then(function(doc) {
            arrayItems.push(doc);
            category.find()
                .then(function (doc2) {
                    arrayItems.push(doc2);
                    res.render('items', {units: arrayItems[0], categories:arrayItems[1], interface: "Item Management", title: "Item Management"});

                })
        });
});


router.post('/additem', function (req, res, next) {
    var newItem = {
        name: req.body.item_name,
        desc: req.body.item_desc,
        code: req.body.item_code,
        brand: req.body.item_brand,
        unit: req.body.item_unit,
        price: req.body.item_price,
        image: req.body.item_image


    };

    var data = new item(newItem);
    data.save(function(err, docs){
        if(err)
        {
            res.json(err);
        }
        else
        {
           // res.send('success Inserted !');
            res.redirect('/items');
        }
    });
});

module.exports = router;


/**
 * Created by Lahiru Senadheera on 4/4/2017.
 */
