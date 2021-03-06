var express = require('express'),
bodyParser  = require('body-parser'),
mongoose    = require('mongoose'),
app         = express();

mongoose.connect('mongodb://localhost:27017/MI6');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var routes = require('./config/routes');
app.use('/api', routes);

app.listen(3000);