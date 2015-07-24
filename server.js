var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.listen(port, function() {
  console.log('The application is running on port ' + port);
});