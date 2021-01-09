const mongoose = require('mongoose');
var employee = mongoose.model('Employee', {
    name : {type: String},
    position: {type:String},
    office: {type: String},
    salary: {type:Number}
});

module.exports = employee;
