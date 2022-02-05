const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    passion:String,
    profession:String,
    email:String,
    number:Number
});

const user = mongoose.model('user',userSchema);

// export default user;
module.exports = user;