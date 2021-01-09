const mongoose = require('mongoose');
var uri ="mongodb+srv://lexluthar:MNihj5rr@cluster0.jjzmt.mongodb.net/CRUD?retryWrites=true&w=majority";
mongoose.connect('uri', (err) => {
    if(!err)
    console.log("Connected to database CRUD !");
    else
    console.log("Error in DB connection!");
});

module.exports = mongoose;
