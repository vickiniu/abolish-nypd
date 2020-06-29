// server.js
// where your node app starts
const Autolinker = require("autolinker");
const bodyParser = require('body-parser');
const https = require('https');
var Airtable = require("airtable");
var express = require("express");

const { getCouncilInfo } = require("./data");

const geoclient_app_id = process.env["GEOCLIENT_APP_ID"];
const geoclient_app_key = process.env["GEOCLIENT_APP_KEY"];
const geoclient_url = `https://api.cityofnewyork.us/geoclient/v1/address.json?app_id=${geoclient_app_id}&app_key=${geoclient_app_key}&`;

var base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

var app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
var listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    return next()
  }
  if (req.headers.host === 'rocky-woodland-60133.herokuapp.com') {
    return res.redirect(301, 'https://www.abolishthenypd.com' + req.url);
  }
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  return next();
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/contact-reps", function (_, response) {
  response.sendFile(__dirname + "/views/contact-reps.html");
});

app.get("/peoples-budget", function (_, response) {
  response.sendFile(__dirname + "/views/peoples-budget.html");
});

app.get("/spread-the-word", function (_, response) {
  response.sendFile(__dirname + "/views/spread-the-word.html");
});

app.get("/resources", function (_, response) {
  response.sendFile(__dirname + "/views/resources.html");
})

// Cache the records in case we get a lot of traffic.
// Otherwise, we'll hit Airtable's rate limit.
var cacheTimeoutMs = 0; // Cache for 5 seconds.
var cachedCutitResponse = null;
var cachedCutitResponseDate = null;

app.get("/cutit-data", function (_, response) {
  var tableName = "Cut It (NYPD Budget)";
  var viewName = "Grid view";
  if (
    cachedCutitResponse &&
    new Date() - cachedCutitResponseDate < cacheTimeoutMs
  ) {
    response.send(cachedCutitResponse);
  } else {
    // Select the first 10 records from the view.
    // TODO(vicki): does this paginate?
    base(tableName)
      .select({
        maxRecords: 100,
        view: viewName
      })
      .firstPage(function (error, records) {
        if (error) {
          response.send({
            error: error
          });
        } else {
          cachedCutitResponse = {
            records: records.map(record => {
              return {
                name: record.get("What to cut?"),
                description: record.get("What is it?"),
                amount: record.get("How much is it?"),
                rationale: record.get("Why should we cut it?"),
                data: Autolinker.link(
                  record.get("Any data or sources to share?")
                )
              };
            })
          };
          cachedCutitResponseDate = new Date();
          response.send(cachedCutitResponse);
        }
      });
  }
});

var cachedReinvestResponse = null;
var cachedReinvestResponseDate = null;
app.get("/reinvest-data", function (_, response) {
  var tableName = "Reinvest It (In Communities)";
  var viewName = "Grid view";
  if (
    cachedReinvestResponse &&
    new Date() - cachedReinvestResponseDate < cacheTimeoutMs
  ) {
    response.send(cachedReinvestResponse);
  } else {
    // Select the first 10 records from the view.
    base(tableName)
      .select({
        maxRecords: 100,
        view: viewName
      })
      .firstPage(function (error, records) {
        if (error) {
          response.send({
            error: error
          });
        } else {
          cachedReinvestResponse = {
            records: records.map(record => {
              return {
                name: record.get("What should the City invest in?"),
                amount: record.get("How much?"),
                rationale: record.get("How does it help our communities?"),
                data: Autolinker.link(
                  record.get("Any data or sources to share?")
                )
              };
            })
          };
          cachedReinvestResponseDate = new Date();
          response.send(cachedReinvestResponse);
        }
      });
  }
});

app.post("/council-member-info", async function (req, res) {
  const url = `${geoclient_url}&houseNumber=${encodeURIComponent(req.body.housenumber)}&street=${encodeURIComponent(req.body.street)}&zip=${encodeURIComponent(req.body.zip)}`;
  console.log(url);
  https.get(url,
    (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', async () => {
        console.log(data);
        const district = JSON.parse(data).address.cityCouncilDistrict;
        if (district) {
          const districtInfo = await getCouncilInfo(district);
          res.json(districtInfo);
        } else {
          console.log('City Council district not found');
          res.json({
            error: 'no city council district found',
          })
        }
      });
    }).on("error", (err) => {
      res.json({
        error: err.message,
      });
    });
});
