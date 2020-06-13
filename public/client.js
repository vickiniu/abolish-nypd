// client-side js
// run by the browser each time your view template is loaded

var usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

// TODO(vicki): only fetch the data that we need per page
$(function() {
  $.getJSON('/cutit-data', function(data) {
    var $container = $('#cutit-container');
    
    if (data.error) {
      // TODO(vicki): figure out how to show the error?
      $container.html('Hmm, an error occurred.');
      return;
    }
    
    // Clear the loading message.
    $container.html('');
    
    data.records.forEach(function(record) {
      var $card = $('<div class="record-card" />');
      var $label = $('<strong />').text(record.name);
      $card.append($label);
      var $amount = $('<p class="record-amount" />').text(usdFormatter.format(record.amount));
      $card.append($amount);
      var $descTitle = $('<p class="record-title" />').text("")
      $container.append($card);
    });
    console.log('Data: ', data);
  });
});

// $(function() {
//   $.getJSON('/data', function(data) {
//     var $dataContainer = $('#data-container');
      
//     if (data.error) {
//       $dataContainer.html('Error! ' + data.error);
//       return;
//     }
      
//     // Clear the loading message.
//     $dataContainer.html('');
    
//     data.records.forEach(function(record) {
//       var $galleryCard = $('<div class="gallery-card" />');
//       if (record.picture[0]) {
//         $('<img />').attr('src', record.picture[0].url).appendTo($galleryCard);
//       }
//       var $label = $('<strong />').text(record.name);
//       $galleryCard.append($label);
//       $dataContainer.append($galleryCard);
//     });
//   });
// });