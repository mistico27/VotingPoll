const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
mongoose.set('debug',true);
mongoose.Promise=global.Promise;
mongoose.connect('')