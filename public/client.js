// client-side js
// run by the browser each time your view template is loaded

$(function() {
    $.getJSON('/data', function (data) {
      var $dataContainer = $('#data-container');
      
      if (data.error) {
        $dataContainer.html('Error! ' + data.error);
        return;
      }
      
      // Clear the loading message.
      $dataContainer.html('');
      
      data.records.forEach(function(record) {
        var $galleryCard = $('<div id="gallery-card" />');
        $galleryCard.append('<img src="' + record.picture[0].url + '">');
        $galleryCard.append('<b>' + record.name + '</b>');
        $dataContainer.append($galleryCard);
      });
    });
});