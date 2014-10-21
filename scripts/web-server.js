'use strict';

var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

var appbase = path.join(__dirname , '..', 'app');


var GLOBAL_CONFIG = JSON.parse(fs.readFileSync( path.join(process.cwd() , 'package.json') ));
GLOBAL_CONFIG.version = parseFloat(GLOBAL_CONFIG.version);

//app.use(less( path.join(appbase, 'styles')) );

app.use( '/', express.static( path.join(appbase )));



//var port = parseInt('9'+ Math.random() * 999);
var port = 9988;
app.listen(port);
console.log('Server start at port ' + port);

