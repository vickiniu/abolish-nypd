// client-side js
// run by the browser each time your view template is loaded

var usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function cutitOnLoad() {
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
      var $label = $('<h3 />').text(record.name);
      $card.append($label);
      
      if (record.amount) {
        var $amount = $('<p class="record-amount" />').text(usdFormatter.format(record.amount));
        $card.append($amount);
      }
      
      if (record.description) {
        var $descTitle = $('<p class="record-title" />').text("What is it?");
        var $desc = $('<p class="record-desc" />').text(record.description);
        $card.append($descTitle);
        $card.append($desc);
      }
      
      if (record.rationale) {
        var $rationaleTitle = $('<p class="record-title" />').text("Why should we cut it?");
        var $rationale = $('<p class="record-desc" />').text(record.rationale);
        $card.append($rationaleTitle);
        $card.append($rationale);
      }
      
      if (record.data) {
        var $dataTitle = $('<p class="record-title" />').text("Data or sources");
        var $data = $('<p class="record-desc" />').html(record.data);
        $card.append($dataTitle);
        $card.append($data);
      }
      
      $container.append($card);
    });
  });
}

function swapOnLoad() {
  $.getJSON('/swap-data', function(data) {
    var $container = $('#swap-container');
    
    if (data.error) {
      $container.html('Hmm, an error occurred.');
      return;
    }
    
    // Clear the loading message.
    $container.html('');
    
    data.records.forEach(function(record) {
      var $card = $('<div class="record-card" />');
      var $label = $('<h3 />').text(record.name);
      $card.append($label);
      
      if (record.examples) {
        var $exampleTitle = $('<p class="record-title" />').text("Examples");
        var $example = $('<p class="record-desc" />').html(record.examples);
        $card.append($exampleTitle);
        $card.append($example);
      }
      
      if (record.notes) {
        var $notesTitle = $('<p class="record-title" />').text("Notes");
        var $notes = $('<p class="record-desc" />').text(record.notes);
        $card.append($notesTitle);
        $card.append($notes);
      }
      
      $container.append($card);
    });
  });
}

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