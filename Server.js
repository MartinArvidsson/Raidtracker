const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/raid', function (req, res) {
  console.log(__dirname)
  res.sendFile(path.resolve('public/views/raidProgress.html'));
});


app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!')
})