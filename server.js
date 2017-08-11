// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// We're going to use the "Product Catalog and Orders" base template:
// https://airtable.com/templates/featured/expZvMLT9L6c4yeBX/product-catalog-and-orders
var Airtable = require('airtable');
var base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);
var tableName = 'Furniture';

var request = require('request');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/data", function (_, response) {
  // Select the first 10 records in "Main View".
  base(tableName).select({
    maxRecords: 10,
    view: 'Main View',
  }).firstPage(function(error, records) {
    if (error) {
      response.send({error: error});
    } else {
      response.send({records: records.map(record => {
        return {
          name: record.get('Name'),
          picture: record.get('Picture'),
        };
      })});
    }
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});