/**
 * Created by Lahiru Senadheera on 4/29/2017.
 */
var mongoose = require('mongoose');
// mongoose.connect('localhost:27017/shoppingbuddy');
// mongoose.connect('mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy');
var Schema = mongoose.Schema;

var unitSchema = new Schema({
    name: String,
    value: String
},{collection: 'unit'});

var unit = mongoose.model('unit', unitSchema);

module.exports = unit;
