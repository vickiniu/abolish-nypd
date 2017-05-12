// client-side js
// run by the browser each time your view template is loaded

$(function() {
    $.getJSON('/data', function (data) {
      
      // Basic table rendering
      // http://stackoverflow.com/questions/17066636/parsing-json-objects-for-html-table
      // Take it an extra mile with some styling or filters...
      var table = $('<table>');
      data.forEach(function(row) {
          var tr = $('<tr/>');
          row.forEach(function(col) {
            tr.append("<td>" + col + "</td>");
          });
          table.append(tr);
      });
      $('#data-container').html(table);
      
      // Mad libs....
      // Rudimentary "templating" using jQuery,
      // It gets the job done, but something like 
      // React, Knockout, etc., would be cooler.
      var madlibs = $('#madlibs').html('');
      data.slice(1).forEach(function(row) {
          var html = "<p> I once met a " + row[0] + " who most preferred " + row[1] + " casserole and " + row[2] + " desserts with tea.</p>";
          madlibs.append(html);
      });
    });
});