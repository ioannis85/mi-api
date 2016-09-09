'use strict';
const Customer = require('../models/customer').Customer;

module.exports = function(app){

//obtiene todos los clientes desde la bd;
app.route('/api/customers')
  .get((req, res)=>{
        Customer.find({}).
        then((collection)=>{
            res.json(collection);
        });
  })
  .post((req, res)=>{
      let customer = req.body;
      Customer.create(customer)
      .then((customer)=>{
        res.status(201).json(customer);
      })
  })

app.route('/api/customers/:id')
    .get((req, res)=>{
      let id = req.params.id;
      Customer.findById(id)
      .then((customer)=>{
          if(!customer) return res.status(404).end('customer not found');
          res.json(customer);
      });
    })
   .delete((req, res)=>{
      let id = req.params.id;
      Customer.remove(id).
      then((customer)=>{
        res.json(customer);
      })
  })



}
