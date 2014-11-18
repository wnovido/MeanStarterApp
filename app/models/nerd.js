/**
 * Created by wilso_000 on 11/17/2014.
 */
//grab the mongoose module
var mongoose = require('mongoose');

//define nerd model
//module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
	name: {type: String, default: ''}
});

