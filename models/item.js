var mongoose = require('mongoose');

// mongoose.connect('mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    desc: String,
    category: String,
    code: String,
    brand: String,
    unit: String,
    price: String,
    image: String,

},{collection: 'item'});

var item = mongoose.model('item', itemSchema);

module.exports = item;