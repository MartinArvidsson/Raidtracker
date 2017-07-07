const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname +'/public'));


app.get('/', function (req, res) {
  res.sendfile('index.html');
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})