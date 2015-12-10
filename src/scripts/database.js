var mongoose = require('mongoose');

//var databaseURI = 'mongodb://localhost/ideation_' + [process.env.NODE_ENV || "dev"];
var databaseURI = global.config.app.db_uri;

mongoose.connect(databaseURI, function(err) {
  if (err) {
    console.error("Error connecting to the database...");
    console.error("Please ensure DB server is available at " + databaseURI);
    console.error("   and that the security configuration is correct")
    console.error("Error message: ", err);
    console.error("Terminating application server");
    //throw(err);
    process.exit();
  } else /*if(process.env.NODE_ENV === 'development')*/{
    console.log(databaseURI + ' connected.');
  }
});

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + databaseURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
