/**
 * Created by Lahiru Senadheera on 4/28/2017.
 */
var express = require('express');
var router = express.Router();
var item = require('../models/item');
var promotion = require('../models/promotion');
router.get('/', function (req,res) {
    // res.render('home',{interface: "Ongoing Promotions", title: "Ongoing Promotions"});
    var yoArray =new Array();

    promotion.find()
        .then(function(doc) {
            var array2 = doc;
            yoArray.push(doc);
            console.log(array2[0 ].item);
          //  console.log(yoArray);
              //  console.log(docw.item);
                item.find({code: array2.item})
                    .then(function (doce) {
                        yoArray.push(doce)
                           // console.log(yoArray);
                        console.log(doce);
            });

            //
            // for(var x=0; x<doc.length; x++){
            //     var y = doc[x].item;
            //     //console.log(y);
            //     item.find({code:y})
            //         .then(function (doc2) {
            //             for(var z=0; z<doc2.length; z++)
            //               //  array2.image = doc2[z].image;
            //             //console.log(y);
            //            // console.log(doc2[z].image);
            //             console.log(array2);
            //             // console.log(doc[x].item);
            //         });
            //     //console.log(doc[x].item);
            // };


            // for (var i=0; i<array2.length; i++){
            //     console.log(i);
            //      item.find({code:array2[i].item})
            //         .then(function (doc) {
            //             //console.log(i-2);
            //             array2[0].image = doc[0].image;
            //             //array2.[i].append({image:doc[0].image});
            //             //console.log(array2);
            //             // console.log(doc);
            //             //console.log(doc[0].image);
            //         })
            // }

            res.render('dash', {promotions: doc, interface: "Ongoing Promotions", title: "Ongoing Promotions"});
        });
});

module.exports = router;
