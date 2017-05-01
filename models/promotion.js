var mongoose = require('mongoose');

// mongoose.connect('mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy');
var Schema = mongoose.Schema;

var promotionSchema = new Schema({
    item: String,
    promotion: String,
    startDate: String,
    endDate: { type: Date, default: Date.now },
    image: String,
    // unit: String,
    // price: String,

},{collection: 'promotion'});

var promotion = mongoose.model('promotion', promotionSchema);

module.exports = promotion;
/**
 * Created by Lahiru Senadheera on 4/29/2017.
 */
