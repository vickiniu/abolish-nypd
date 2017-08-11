// client-side js
// run by the browser each time your view template is loaded

function htmlEncode(value){
  //create a in-memory div, set it's inner text(which jQuery automatically encodes)
  //then grab the encoded contents back out.  The div never exists on the page.
  // taken from https://stackoverflow.com/a/14346506/162210
  return $('<div/>').text(value).html();
}

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
        if (record.picture[0]) {
          // Just show the first picture, if it has one.
          $galleryCard.append('<img src="' + record.picture[0].url + '">');
        }
        $galleryCard.append('<b>' + htmlEncode(record.name) + '</b>');
        $dataContainer.append($galleryCard);
      });
    });
});