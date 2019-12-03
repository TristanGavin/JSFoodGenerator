//Express server generating templates.


var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;


