'use strict'

var validator = require('validator');
var Starship = require('../models/starship');

var controller = {

  index : (request, response) => {

    Starship.find({}).sort('id_starship').exec((error, starships) => {
        if(error){
          return response.status(404).send({
            message : "Error al devolver los datos!"
          });
        }

        if(starships.length == 0){
          return response.status(200).send({
            error : "No hay naves que mostrar!"
          });
        }

        return response.status(200).send({
            starships
        });
    });

  },
  store : (request, response) => {

    var params = request.body;

    var starship = new Starship();
    starship.name = params.name;
    starship.model = params.model;
    starship.length = params.length;
    starship.cargo_capacity = params.cargo_capacity;
    starship.passengers = params.passengers;
    starship.max_atmosphering_speed = params.max_atmosphering_speed;
    starship.hyperdrive_rating = params.hyperdrive_rating;
    starship.manufacturer = params.manufacturer;
    starship.starship_class = params.starship_class;
    starship.cost_in_credits = params.cost_in_credits;
    starship.save((error, starshipStored) => {

      if(error || !starshipStored){
        return response.status(404).send({
          message: 'Ha ocurrido un error al guardar!'
        });
      }

      return response.status(200).send({
        message: 'Nave espacial guardada correctamente!'
      });

    });

  },
  show : (request, response) => {

    var id = request.params.id;

    if(!id || id == null){
      return response.status(404).send({
        message: 'No se encontró un id valido!'
      });
    }

    Starship.findById(id, (error, starship) => {

      if(error || !starship){
        return response.status(404).send({
          message: 'No existe la nave espacial!'
        });
      }

      return response.status(200).send({
          starship
      });

    });

  },
  update : (request, response) => {

    var id = request.params.id;

    var params = request.body;

    Starship.findOneAndUpdate({_id : id}, params, {new : true}, (error, starshipUpdated) => {

      if(error || !starshipUpdated){
        return response.status(404).send({
          message: 'Ha ocurrido un error al actualizar!'
        });
      }

      return response.status(200).send({
        message: 'Nave espacial actualizada correctamente!'
      });

    });
  },
  delete : (request, response) => {

    var id = request.params.id;

    Starship.findOneAndDelete({_id : id}, (error, starshipRemoved) => {

      if(error || !starshipRemoved){
        return response.status(404).send({
          message: 'Ha ocurrido un error al eliminar!'
        });
      }

      return response.status(200).send({
        message: 'Nave espacial eliminada correctamente!'
      });

    });

  }

};

module.exports = controller;
