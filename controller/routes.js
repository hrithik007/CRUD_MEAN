const express = require('express'),
var routes = express.Router();
var  { employe} = require('../models/employe');
var ObjectId = require('mongoose').Types.ObjectId;







routes.get('/employee/get',(req, res) => {
    employe.find((err , docs)=> {
        if(!err) {res.send(docs);}
        else {console.log("Error in '/")}
    });
});


routes.get('./:id',(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("Error with the ID")
    employe.findById(req.params.id,(err, docs)=>{
        if(!err){ res.send(docs); }
        else { console.log('Error with the req in id')}
    });
});
  


routes.post('/empolyee/add',(req,res) => {
    var emp = new employe({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err , doc) => {
        if(!err){res.send(doc)}
        else
        console.log("Eror!!!")
    });
});



routes.put('/:id',(req, res) =>{
    if(!ObjectId.isValid(req,params.ObjectId))
     return res.status(400).send("Error with the ID")
    var emp = new employe({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });

    employe.findByIdAndUpdate(req.params.id, {$set:emp},{new: true},(err, docs) => {
        if (!err) { res.send(docs);}
        else { console.log('Erorr');
    }
    })
     
})



routes.delete('/:id',(req, res) =>{
    if(!ObjectId.isValid(req,params.ObjectId))
     return res.status(400).send("Error with the ID")


    employe.findByIdAndRemove(req.params.id, {$set:emp},{new: true},(err, docs) => {
        if (!err) { res.send(docs);}
        else { console.log('Erorr');
    }
    })
     
})





 module.exports = routes;