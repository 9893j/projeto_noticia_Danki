const express = require('express');
var bodyParser = require('body-parser');

const Path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use( '/public', express.static(Path.join(__dirname,'public')));
app.set('views', __dirname + '/views');



app.listen(5000,() => {
  console.log('rodando na porta 5000');
});