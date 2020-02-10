'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StarshipsSchema = Schema({
  name : String,
  model : String,
  length : String,
  cargo_capacity : String,
  passengers : String,
  max_atmosphering_speed : String,
  hyperdrive_rating : String,
  manufacturer : String,
  starship_class : String,
  cost_in_credits : String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Starship', StarshipsSchema);
