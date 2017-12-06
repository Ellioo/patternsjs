// *** Directory requirement (pseudo-plugins) ***

var requireDir = require('require-all');
var routes = requireDir('./routes');

app.get('/', routes.home);
app.get('/register', routes.auth.register);
app.get('/login', routes.auth.login);
app.get('/logout', routes.auth.logout);

// require all modules from the directory

// more difficult example of usage (more flexible):
var requireFu = require('require-fu');

requireFu(__dirname + '/routes')(app);
// every function is:
module.exports = function(app) {
  app.get("/about", function(req, res) {
    // do something
  });
}
// we can create new route without 
// any changes in requiring module