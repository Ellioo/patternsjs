// *** Application object ***

var app = new MyApp();

app.db = require('./db');
app.log = new require('./logger')();
app.express = require('express')();
app.i18n = require('./i18n').initialize();

app.models = require('./models')(app);

require('./routes')(app);

// then we can "transmit" this object into other modules,
// use it as argument of function or 'require'

// note: this is like God object anti-pattern,
// be careful with abstraction level