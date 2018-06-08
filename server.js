// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var { dateCheck } = require('./date');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// "Fri, 25 Dec 2015 00:00:00 GMT"
// your first API endpoint... 
app.get("/api/timestamp/:date_string", function (req, res) {
  dateCheck(req.params.date_string)
  .then((timestamp) => {
    res.send({
      unix: timestamp,
      utc: new Date(timestamp).toUTCString()});
  })
  .catch((e) => {
    res.status(304);
    res.send({error: e});
  });
});



// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});