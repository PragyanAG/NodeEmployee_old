var mongoose = require('mongoose');


var ClientSchema = new mongoose.Schema({
  client_id: String,
  companyname: String,
  address: String,
  country: String,
  city: String,
  postalcode: String,
  officeno: {
	  type:[String],
	  usePushEach: true},
  website: String,
  status: String,
  inserted_at: { type: Date, default: Date.now }
  
});


module.exports = mongoose.model('Client', ClientSchema,'clients');