/**
 * Created by Lahiru Senadheera on 4/28/2017.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shoppingbuddy');
router.post('/test', function (req, res, next) {
    var newItem = {
        name: "new",
        price: "12"
    };
   newItem.save();
});
