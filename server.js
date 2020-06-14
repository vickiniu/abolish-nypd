// server.js
// where your node app starts

// We're going to use the "Product Catalog and Orders" base template:
// https://airtable.com/templates/featured/expZvMLT9L6c4yeBX/product-catalog-and-orders
var Airtable = require("airtable");
var base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

var express = require("express");
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/cutit", function(request, response) {
  response.sendFile(__dirname + "/views/cutit.html");
});

app.get("/reinvest", function(request, response) {
  response.sendFile(__dirname + "/views/reinvest.html");
});

app.get("/swap", function(request, response) {
  response.sendFile(__dirname + "/views/swap.html");
});

app.get("/gallery", function(request, response) {
  response.sendFile(__dirname + "/views/gallery.html");
});

// Cache the records in case we get a lot of traffic.
// Otherwise, we'll hit Airtable's rate limit.
var cacheTimeoutMs = 0 // Cache for 5 seconds.
var cachedCutitResponse = null;
var cachedCutitResponseDate = null;

app.get("/cutit-data", function(_, response) {
  var tableName = "Cut It (NYPD Budget)";
  var viewName = "Grid view";
  if (cachedCutitResponse && new Date() - cachedCutitResponseDate < cacheTimeoutMs) {
    response.send(cachedCutitResponse);
  } else {
    // Select the first 10 records from the view.
    // TODO(vicki): does this paginate?
    base(tableName)
      .select({
        maxRecords: 10,
        view: viewName
      })
      .firstPage(function(error, records) {
        if (error) {
          response.send({ error: error });
        } else {
          cachedCutitResponse = {
            records: records.map(record => {
              return {
                name: record.get("What to cut?"),
                description: record.get("What is it?"),
                amount: record.get("How much is it?"),
                rationale: record.get("Why should we cut it?"),
                data: record.get("Any data or sources to share?")
              };
            }),
          };
          cachedCutitResponseDate = new Date();
          response.send(cachedCutitResponse);
        }
      });
  }
});

app.get("/data", function(_, response) {
  var tableName = "Furniture";
  var viewName = "Furniture gallery";
  if (cachedResponse && new Date() - cachedResponseDate < cacheTimeoutMs) {
    response.send(cachedResponse);
  } else {
    // Select the first 10 records from the view.
    base(tableName)
      .select({
        maxRecords: 10,
        view: viewName
      })
      .firstPage(function(error, records) {
        if (error) {
          response.send({ error: error });
        } else {
          cachedResponse = {
            records: records.map(record => {
              return {
                name: record.get("Name"),
                picture: record.get("Images")
              };
            })
          };
          cachedResponseDate = new Date();

          response.send(cachedResponse);
        }
      });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
