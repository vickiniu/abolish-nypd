// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var request = require('request');
var fs = require('fs');
var tmp = require('tmp');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/data", function (_, response) {
    // Use localUrl to host your spreadsheet using Glitch's Assets folder:
    var localUrl = "https://s3.amazonaws.com/hyperweb-editor-assets/us-east-1%3Ac3e8cd26-9ffe-46b3-b130-48f8ac8a781c%2Fgibberish.xlsx";
    
    // Or use something fancier like Dropbox.
    // > Use any Dropbox public 'share' link for an xlsx file, 
    // > and be sure to add "?dl=1" to the end to make it direct.
    var dropboxUrl = "https://www.dropbox.com/s/1njhpmwp09h01iy/sheet.xlsx?dl=1";
    
    // We'll use this dropbox url by default.
    var url = dropboxUrl;
    
    var r = request(url);
    r.on('response', (res) => {
      // Our excel parsing library expects to read from a file,
      // So we do a little bit of temp file dance to wire it up.
      // For the moment it only support .xlsx files,
      // but .csv, .xls, etc., are fairly easy extensions.
      
      var tmpobj = tmp.fileSync({postfix:'.xlsx'});

      var fileName = tmpobj.name;
      
      res.pipe(fs.createWriteStream(fileName));
      
      var parseXlsx = require('excel');
      parseXlsx(fileName, (err, data) => {
        if(err) throw err;
        response.send(data);
      });
    });
    r.on('error', (err) => {
        throw err;
    });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});