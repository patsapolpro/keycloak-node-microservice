var express = require('express');
var app = express();

const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

const roleController = require('./controller/role-controller.js');
app.use('/role', roleController);

app.get('/', function(req, res){
   res.send("Server is up!");
});

app.listen(3000);
