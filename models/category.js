/**
 * Created by Lahiru Senadheera on 4/29/2017.
 */
var mongoose = require('mongoose');
// mongoose.connect('localhost:27017/shoppingbuddy');
// mongoose.connect('mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: String,
    value: String
},{collection: 'category'});

var category = mongoose.model('category', categorySchema);

module.exports = category;
/**
 * Created by Lahiru Senadheera on 5/1/2017.
 */
