// client-side js
// run by the browser each time your view template is loaded

var usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function peoplesBudgetOnLoad() {
  loadCuts();
  loadReinvest();
}

function loadCuts() {
  $.getJSON('/cutit-data', function (data) {
    var $container = $('#cutit-container');

    if (data.error) {
      $container.html('Hmm, an error occurred.');
      return;
    }

    // Clear the loading message.
    $container.html('');

    data.records.forEach(function (record) {
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

function loadReinvest() {
  $.getJSON('/reinvest-data', function (data) {
    var $container = $('#reinvest-container');

    if (data.error) {
      $container.html('Hmm, an error occurred.');
      return;
    }

    // Clear the loading message
    $container.html('');

    data.records.forEach(function (record) {
      var $card = $('<div class="record-card" />');
      var $label = $('<h3 />').text(record.name);
      $card.append($label);

      if (record.amount) {
        var $amount = $('<p class="record-amount" />').text(usdFormatter.format(record.amount));
        $card.append($amount);
      }

      if (record.rationale) {
        var $rationaleTitle = $('<p class="record-title" />').text("How does it help our communities?");
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
  $.getJSON('/swap-data', function (data) {
    var $container = $('#swap-container');

    if (data.error) {
      $container.html('Hmm, an error occurred.');
      return;
    }

    // Clear the loading message.
    $container.html('');

    data.records.forEach(function (record) {
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

function generateEmail() {
  var name = document.getElementById("name").value;
  var neighborhood = document.getElementById("neighborhood").value;
  const emailText = `Dear Councilmember,

My name is ${name} and I am a resident of ${neighborhood}. As you know, NYC Mayor Bill De Blasio proposed major budget cuts for the Fiscal Year 2021, especially to education and youth programs, while refusing to dramatically slash the NYPD budget. 
  
The Speaker and NYC Council has found $1 billion worth of cuts, but I, along with many other residents of this city, are asking you for far more meaningful cuts that address the concerns of the moment. I urge you to work with your colleagues to do the following to respond to the #DefundNYPD demands:
  
  1. Release the Council’s detailed NYPD cuts proposal immediately to allow for public review and complete transparency.

  2. Cut NYPD budget and officer headcount by half in FY21 which means cutting the police (operating) budget by half ($3B) and cutting the headcount of uniformed officers by half to truly address police violence. The Council’s proposal to reduce civilian positions or allocations to “other than personnel services” does not address concerns about uniformed officers on the street. I am concerned about overtime cuts that are unenforceable and ask that Council show the public the mechanisms by which caps or cuts can be determined through budget adoption.

  3. Get cops out of schools and issues that could be addressed by social services and community workers in FY21 which means an end to police response to issues that could be transitioned to community workers, and all officers and NYPD employees should be removed from schools, mental health response and co-response teams, homeless outreach, neighborhood disputes, transit, and subways. 

  4. Redirect funds to Black communities in FY21. Redirect the billions that go to police departments toward providing health care, housing, social services, schools, childcare and eldercare, and programs that benefit Black people, that would create less need for police in the first place.

  5. Fully transparent NYPD budget in FY21. Just based on how difficult it has been for the public to engage in an open process around NYPD cuts, the Council needs to demand a fully transparent NYPD budget that is accessible to the public. It is unacceptable that there are large swaths of the NYPD budget unavailable to anyone. 

  6. No rollbacks. The Council should ensure that these cuts remain in place for future fiscal years, and not just as a ‘austerity budget’ measure. These cuts to the NYPD are in the interest of community safety and the well being of Black people, not just savings for the City during this fiscal crisis. 
  
As someone who cares deeply about our city, I urge you to vote NO to a budget that does not defund the police by a half and the force by a half. I am also asking that Council members remain transparent with their residents on the process of negotiation in the coming month, and publicly make a definitive statement in support of these #DefundNYPD demands before the end of the month, so residents can hold them accountable.
  
It is more clear to me than ever that true community safety comes from investing in education, our youth, healthcare, housing, and other social services — not an over-militarized police with little to no accountability. For the sake of our city, please commit to defunding the NYPD by half.
  
Thank you,
${name}
  `;

  const emails = `
mguerra@council.nyc.gov,
district2@council.nyc.gov,
speakerjohnson@council.nyc.gov,
kpowers@council.nyc.gov,
bkallos@council.nyc.gov,
helen@helenrosenthal.com,
district7@council.nyc.gov,
dayala@council.nyc.gov,
d09perkins@council.nyc.gov,
yrodriguez@council.nyc.gov,
district11@council.nyc.gov,
andy.king@council.nyc.gov,
MGjonaj@council.nyc.gov,
fcabrera@council.nyc.gov,
Rtorres@council.nyc.gov,
District16Bronx@council.nyc.gov,
salamanca@council.nyc.gov,
RDiaz@council.nyc.gov,
district19@council.nyc.gov,
pkoo@council.nyc.gov,
FMoya@council.nyc.gov,
nroloson@council.nyc.gov,
nwidzowski@council.nyc.gov,
BGrodenchik@council.nyc.gov,
RLancman@council.nyc.gov,
dromm@council.nyc.gov,
arasoulinejad@council.nyc.gov,
bclarke@council.nyc.gov,
Adams@council.nyc.gov,
JWilkerson@council.nyc.gov,
KMooney@council.nyc.gov,
Koslowitz@council.nyc.gov,
District30@council.nyc.gov,
dkurzyna@council.nyc.gov,
swong@council.nyc.gov,
drichards@council.nyc.gov,
msilva@council.nyc.gov,
bscott@council.nyc.gov,
eulrich@council.nyc.gov,
LCumbo@council.nyc.gov,
district36@council.nyc.gov,
meugene@council.nyc.gov,
District41@council.nyc.gov,
jsimmons@council.nyc.gov,
mwashington@council.nyc.gov,
AskJB@council.nyc.gov,
AskKalman@council.nyc.gov,
District45@council.nyc.gov,
SPierre@council.nyc.gov,
HNolasco@council.nyc.gov,
AMaisel@council.nyc.gov,
MTreyger@council.nyc.gov,
cdeutsch@council.nyc.gov,
DROSE@Council.nyc.gov,
SMatteo@council.nyc.gov,
borelli@council.nyc.gov,
cojo63@gmail.com,
ydanisrodriguez@hotmail.com,
AndyJCohen@optonline.net,
councilmanandyking@gmail.com,
mcarroyo17@yahoo.com,
peterkoo88@gmail.com,
daneek7@hotmail.com,
stephenlevin9@yahoo.com,
cornegyr@yahoo.com,
inezdbarron@aol.com,
ben@benkallos.com`;

  var body = encodeURIComponent(emailText);
  var subject = encodeURIComponent("#DefundNYPD by half, and reduce officers by half this year");
  var url = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}&bcc=${emails}`;
  htmlText = emailText.replace(/\n/g, "<br />");
  document.getElementById("preview").innerHTML = `
<h2>
PREVIEW
</h2>
<p class="preview">
${htmlText}
</p>
<div class="send-mail-container">
<div class="send-mail">
<a href="${url}" target="_blank"><button>
Send with Gmail
</button>
</a>
</div>
<div class="send-mail">
<a href="mailto:?bcc=${emails}&subject=${subject}&body=${body}"><button>Send with Mail App</button></a>
<p style="margin:5px;"><i>(best for mobile)</i></p>
</div>
</div>
      `;
}

function showCutitModal() {
  var modal = document.getElementById("cutit-form-modal");
  modal.style.display = "block";
  var iframe = document.getElementById("cutit-form-iframe");
  iframe.style.height = "1085px";
  iframe.style.z_index = "2";
}

function closeCutitModal() {
  var modal = document.getElementById("cutit-form-modal");
  modal.style.display = "none";
}

function showReinvestModal() {
  var modal = document.getElementById("reinvest-form-modal");
  modal.style.display = "block";
  var iframe = document.getElementById("reinvest-form-iframe");
  iframe.style.height = "1085px";
  iframe.style.z_index = "2";
}

function closeReinvestModal() {
  var modal = document.getElementById("reinvest-form-modal");
  modal.style.display = "none";
}

function showPhoneScript() {
  var drawer = document.getElementById("phone-script-drawer");
  if (drawer.style.display === "block") {
    drawer.style.display = "none";
  } else {
    drawer.style.display = "block";
  }
}