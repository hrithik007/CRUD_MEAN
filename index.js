var app = require('express');
bodyparser = require('body-parser')
const {mongoose} = require('./db');
app.use(bodyParser.json());
app.listen(3000, () => console.log('Server On !'));

