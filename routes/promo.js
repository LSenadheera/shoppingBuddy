/**
 * Created by Lahiru Senadheera on 4/19/2017.
 */
var express = require('express');
var router = express.Router();
var unit = require('../models/unit');
var promotion = require('../models/promotion');
var item = require('../models/item');
router.get('/', function (req,res,next) {
    var array1 = new Array();
    item.find()
        .then(function (doc) {
            array1.push(doc);
            unit.find()
                .then(function (doc) {
                    array1.push(doc);
                    //console.log(array1);
                    res.render('promo',{items:array1[0], units:array1[1], interface:"Promotion Management"});
                    // console.log(array1);
                });
        });
});

router.post('/images', function (req,res) {
    item.find({code: req.body.datan})
        .then(function (hut) {
            var array4=hut;
            res.send(array4[0].image);
            console.log(hut);
    })
    console.log(req.body.datan);
    //res.send(req.body.data);
// res.redirect('/home');
});

router.post('/addPromo', function (req,res) {
// var image2="";
//     console.log(req.body.item_name);
//     item.find({code:req.body.item_name})
//         .then(function (docimg) {
//             image2 = docimg[0].image;
//             console.log(image2);
//             window.img22=image2;
//         });
// console.log(window.img22);

    var newPromotion = {

        item: req.body.item_name,
        startDate: req.body.promo_start_date,
        endDate: req.body.promo_end_date,
        promotion: req.body.promotion_desc,
        image: req.body.pImage

        
    };

    var promo = new promotion(newPromotion);
    promo.save(function(err, docs){
        if(err)
        {
            res.json(err);
        }
        else {
            // res.send('success Inserted !');
            res.redirect('/promo');
        }
        });

});

/**
 * Created by Lahiru Senadheera on 4/30/2017.
 */




module.exports = router;