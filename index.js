'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

//'mongodb+srv://wayasMongo:MongoDBNode@nodebackendcluster-uh5h0.mongodb.net/db_starwars?retryWrites=true&w=majority'
//'mongodb://localhost:27017/db_starwars'

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://wayasMongo:MongoDBNode@nodebackendcluster-uh5h0.mongodb.net/db_starwars?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('La conexión a la base de datos se ha realizado correctamente!');

    app.listen(port, () => {
      console.log('Servidor en '+ port);
    });
});
