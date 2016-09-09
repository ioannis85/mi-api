'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerSchema = new Schema({
name : String,
age : Number,
registerDate : { type: Date, default: Date.now }
});

const customerModel = mongoose.model('Customer', customerSchema);

module.exports.Customer = customerModel;
