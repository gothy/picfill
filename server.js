var path = require('path');
var express = require('express');
var app = express();

var generate = require('./generator').generate;


app.get(/([0-9]{0,4})x([0-9]{0,4})\/?((?:[0-9a-fA-F]{3}){1,2})?\/?((?:[0-9a-fA-F]{3}){1,2})?/, 
function (req, res) {
  // console.log(req.params);
  var width = req.params[0];
  var height = req.params[1];
  var bgcolor = '#' + (req.params[2] || 'f7f7f7');
  var textcolor = '#' + (req.params[3] || 'aaaaaa');
  var text = req.query.text || '';

  
  // console.log (width, height, bgcolor, textcolor, text);

  generate(width, height, bgcolor, textcolor, text, function(err, buffer) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.set('Content-Type', 'image/png');
      res.set('Content-Length', buffer.length);

      res.status(200).send(buffer);
    }
  });
});

app.use(express.static(path.join(__dirname, 'dist/')));

var server = app.listen(4000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
