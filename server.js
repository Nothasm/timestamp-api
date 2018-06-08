var express = require('express');
var app = express();
var { dateCheck } = require('./date');
var cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/timestamp/:date_string?", (req, res) => {
  dateCheck(req.params.date_string)
    .then((timestamp) => {
      res.send({
        unix: timestamp,
        utc: new Date(timestamp).toUTCString()});
    })
    .catch((e) => {
      res.status(400).send({error: e});
    });
});

app.listen(PORT, () => {
  console.log('Your app is listening on port ' + PORT);
});