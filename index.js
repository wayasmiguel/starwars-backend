'use strict'

var mongoose = require('mongoose');
var app = require('./app');
require('dotenv').config({path: 'environment.env'});
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_PROD, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('La conexión a la base de datos se ha realizado correctamente!');

    app.listen(port, host, () => {
      console.log('Servidor en '+ port);
    });
});
