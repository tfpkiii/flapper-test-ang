'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Flapper, app, auth, database) {

  app.get('/flapper/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/flapper/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/flapper/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/flapper/example/render', function(req, res, next) {
    Flapper.render('index', {
      package: 'flapper'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
