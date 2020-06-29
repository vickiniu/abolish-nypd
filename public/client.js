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

// TODO(vicki): use something like React so we don't have to do
// all this manual DOM manipulation.
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

function generateEmail() {
  var name = document.getElementById("name").value ? document.getElementById("name").value : "[NAME]";
  var neighborhood = document.getElementById("neighborhood").value ? document.getElementById("neighborhood").value : "[NEIGHBORHOOD]";

  const emailText = `Dear Councilmember,

My name is ${name} and I am a resident of ${neighborhood}. In the final hours of the budget, I am asking you to vote no on the budget if it does not contain at least $1 billion in meaningful cuts to the NYPD and reinvesting those funds into communities and human services.

By meaningful cuts, they need to actually reduce policing in our communities. This means that the headcount needs to be brought down, and not just by attrition. While the Mayor has been unwilling to lay off police officers, he has already laid off over 13,000 contracted social services workers and 130 DOE guidance counselors in low income schools, and threatens to cut 22,000 city workers. Additionally, just moving school safety officers to the DOE, or any other uniformed officer to another division is not a cut that reduces policing of Black, Brown and other communities of color. It is just a shell game that cannot be counted towards meaningful cuts. Attempts to cap overtime are also meaningless since the Council has failed to cap overtime in the past, and has not demonstrated that there is real mechanisms to control NYPD overtime. “Cutting” overtime can be cited as a win in the budget as it passes by July 1st, and then approved later when the NYPD overspends hundreds of millions of dollars on overtime, as it has done in the past. This also cannot be counted towards meaningful cuts.

Meaningful cuts of at least $1 billion must target the NYPD Expense Budget. These cuts must reduce the headcount of uniformed officers immediately, put pressure on the NYPD to fire killer cops, get cops out of our schools, subways, homeless services and other social services.  

A litmus test of whether these cuts are meaningful is how much money gets reinvested in education, youth services, social services, and especially in Black communities. If a cut is a true cut, and not just a transfer, a cap, or other fuzzy math, there will be funds available to reinvest in communities and I as your constituent will know! I am paying attention to the ways the Council is divesting from NYPD and police headcount, and investing in our communities. That means we need to fund SYEP and other youth programs, education, homeless services, critical social safety net programs, and human services organizations. Investing in our communities and the organizations that serve them is not only the best way to promote community safety and wellness; it is the only way that we recover from the pandemic equitably. 

Will you please commit to voting no on the budget unless it includes $1 billion in cuts to the NYPD Expense Budget and uniformed officer headcount, and reinvests that money in Black communities and human services?

Thank you,
${name}
  `;

  var emails = `
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

  // If they have selected a council member, use their email
  if (councilMemberInfo) {
    emails = councilMemberInfo.emails;
  }

  var body = encodeURIComponent(emailText);
  var subject = encodeURIComponent("[URGENT] Vote NO on a budget without cops out of schools & drastic headcount reduction");
  var url = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}&bcc=${emails}`;
  var htmlText = emailText.replace(/\n/g, "<br />");
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
<a href="mailto:?bcc${emails}&subject=${subject}&body=${body}"><button>Send with Mail App</button></a>
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

// council member names + phone numbers who have
// committed to voting NO
var councilMemberPhones = [
  {
    name: "Margaret Chin",
    phone: "212-587-3159",
    twitter: "@CM_MargaretChin",
  },
  {
    name: "Francisco Moya",
    phone: "718-651-1917",
    twitter: "@FranciscoMoyaNY",
  },
  {
    name: "Costa Constantinides",
    phone: "718-274-4500",
    twitter: "@Costa4NY",
  },
  {
    name: "Jimmy Van Bramer",
    phone: "718-383-9566",
    twitter: "@JimmyVanBramer",
  },
  {
    name: "Brad Lander",
    phone: "718-499-1090",
    twitter: "@BradLander",
  },
  {
    name: "Alicka Ampry-Samuel",
    phone: "718-953-3097",
    twitter: "@AlickaASamuel41",
  },
  {
    name: "Farah Louis",
    phone: "718-629-2900",
    twitter: "@FarahNLouis",
  },
  {
    name: "Carlos Menchaca",
    phone: "718-439-9012",
    twitter: "@NYCCouncil38",
  },
  {
    name: "Antonio Reynoso",
    phone: "718-963-3141",
    twitter: "@ReynosoBrooklyn",
  },
  {
    name: "Ben Kallos",
    phone: "212-860-1950",
    twitter: "@kallos",
  },
];

function shuffle(array) {
  var i;
  for (i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
}

var councilMemberIndex = 0;
var shuffledCouncilMembers = shuffle(councilMemberPhones);

function getPhoneScript() {
  console.log("getting phone script");
  var drawer = document.getElementById("phone-script-drawer");
  if (drawer.style.display != "block") {
    // On first click, show the drawer
    drawer.style.display = "block";
  }

  var name = document.getElementById("name").value ? document.getElementById("name").value : "[NAME]";
  var neighborhood = document.getElementById("neighborhood").value ? document.getElementById("neighborhood").value : "[NEIGHBORHOOD]";

  var councilmember = shuffledCouncilMembers[councilMemberIndex % shuffledCouncilMembers.length];
  // Get a new council member to call
  var councilmemberElement = document.getElementById("call-council-member");
  councilmemberElement.innerHTML = `
  <h2>COUNCIL MEMBER ${councilmember.name.toUpperCase()}</h2>
  <p>District office: <a href="tel:${councilmember.phone}">${councilmember.phone}</a></p>
  `;
  councilMemberIndex++;

  var phoneScript = document.getElementById("phone-script");
  phoneScript.innerHTML = `
  <p>
  My name is ${name} and I live in ${neighborhood}. I am calling to ask Council Member ${councilmember.name} to
  vote no on a budget
  that does not contain at least $1 billion in meaningful cuts to the NYPD and reinvesting
  those funds into communities and human services.
</p>
<p>
  We need at least $1 billion in meaningful cuts that targets the expense budget and uniformed
  officer headcount so we can actually reduce policing in our communities. Any attempts to
  transfer officers from one department to another, cap overtime which cannot truly be capped,
  or other so-called cuts that don’t actually reduce policing are just shell games and fuzzy
  math.
</p>
<p>
  We must get cops out of our schools, subways, homeless and social services, and reinvest
  that money in Black communities, in youth programs, education, and human services.
</p>
<p>
  Will Council Member ${councilmember.name.split(" ").slice(1).join(" ")} commit to voting no on the budget if it doesn’t do these things ?
</p >
  `;

  // also update the tweet box in here
  // worth thinking if we should just give you a council member to phone + email + tweet?
  var tweetTextElement = document.getElementById("tweet-text");
  var tweetText = `.${councilmember.twitter} — will you commit to VOTE NO on a budget UNLESS it cuts at least $1b in meaningful cuts — from expense budget and officer headcount, not just transfers to other departments — and reinvests in Black communities, youth, education, and human services?`;
  tweetTextElement.innerHTML = tweetText;
  var tweetButton = document.getElementById("tweet-button");
  tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
}

// select a random council member to tweet at first
function loadContactReps() {
  var councilmember = shuffledCouncilMembers[0];
  var tweetTextElement = document.getElementById("tweet-text");
  var tweetText = `.${councilmember.twitter} — will you commit to VOTE NO on a budget UNLESS it cuts at least $1b in meaningful cuts — from expense budget and officer headcount, not just transfers to other departments — and reinvests in Black communities, youth, education, and human services?`;
  tweetTextElement.innerHTML = tweetText;
  var tweetButton = document.getElementById("tweet-button");
  tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
}

function buildTweetButtons() {
  var tweetButton = document.getElementById("tweet-1");
  const tweet1 = encodeURIComponent('.@NYCSpeakerCoJo: Will you commit to #DefundNYPD by cutting the NYPD operating budget in HALF in FY21 & reducing the officer headcount by HALF? The City must redirect these funds to Black communities, & remove cops from schools, homeless services, mental health response NOW.');
  var url = `https://www.twitter.com/intent/tweet?text=${tweet1}`;
  tweetButton.href = url;

  tweetButton = document.getElementById("tweet-2");
  const tweet2 = encodeURIComponent('.@NYCSpeakerCoJo: $1B cuts to NYPD is not enough. I, along with many in this city, are asking you for far more meaningful cuts that address the concerns of the moment. #DefundNYPD by half and cut officer headcount by half in FY21 and redistribute those funds to Black communities.');
  url = `https://www.twitter.com/intent/tweet?text=${tweet2}`;
  tweetButton.href = url;
}

const address = new google.maps.places.Autocomplete(
  document.getElementById("address-input"),
  {
    // https://www1.nyc.gov/assets/planning/download/pdf/data-maps/open-data/nybb_metadata.pdf?ver=18c
    bounds: new google.maps.LatLngBounds(
      { lat: 40.495992, lng: -74.257159 },
      { lat: 40.915568, lng: -73.699215 }
    ),
    types: ["address"],
    strictBounds: true,
    fields: ["address_components", "formatted_address"]
  }
);

// TODO(vicki): less ugly hack here
// councilMemberInfo is a global variable so we can 
// reference the correct emails also when generating.
// This is not a super-excellent way to handle this.
var councilMemberInfo = null;

// TODO(vicki): add in more council member info
function lookupRep() {
  const place = address.getPlace();
  if (!place) {
    var $error = $('#address-input-error');
    $error.html($('<p class="error" />').text('Unable to find address'));
    return;
  }
  const body = {};
  place.address_components.forEach(f => {
    if (f.types.includes("street_number")) {
      body.housenumber = f.short_name;
    } else if (f.types.includes("route")) {
      body.street = f.short_name;
    } else if (f.types.includes("postal_code")) {
      body.zip = f.short_name;
    }
  });
  $.ajax(
    '/council-member-info',
    {
      'data': JSON.stringify(body),
      'type': 'POST',
      'processData': false,
      'contentType': 'application/json',
    }
  ).done(function (data) {
    if (data.error) {
      var $error = $('#address-input-error');
      $error.html($('<p class="error" />').text('Unable to find City Council information for that address'));
      return;
    }
    // TODO(vicki:) improve
    councilMemberInfo = data;
    var $container = $('#council-member-info');
    var $name = $('<h2 />').text(`COUNCILMEMBER ${data.full_name}`.toUpperCase());
    // TODO(vicki): make the capitalization hack nicer
    var $district_party = $('<p />').text(`District ${data.district}, ${data.party[0].toUpperCase() + data.party.slice(1)}`);
    $container.html($name, $district_party);
    if (data.positions) {
      var $cuts_position;
      if (data.positions.cut_nypd_budget === "YES") {
        $cuts_position = $('<p />').text('Supports cutting the NYPD budget');
      } else if (data.positions.cut_nypd_budget === "NO") {
        $cuts_position = $('<p />').text('Opposes cutting the NYPD budget');
      } else {
        $cuts_position = $('<p />').text('Has not committed to cutting the NYPD budget');
      }
      $container.append($cuts_position);
      var $budget_vote_position;
      if (data.positions.vote_against_status_quote_budget === "YES") {
        $budget_vote_position = $('<p />').text('Will vote against a status-quo NYPD budget');
      } else if (data.positions.vote_against_status_quote_budget === "NO") {
        $budget_vote_position = $('<p />').text('Will not vote against a status-quo NYPD budget');
      } else {
        $budget_vote_position = $('<p />').text('Has not committed to vote against a status-quo NYPD budget');
      }
      $container.append($budget_vote_position);
      var $cut_amount_position;
      if (data.positions.nypd_cut_amount && data.positions.nypd_cut_amount !== "Against cuts") {
        $cut_amount_position = $('<p />').text(`Is seeking ${data.positions.nypd_cut_amount} in cuts to the NYPD budget`);
      }
      $container.append($cut_amount_position);
    }

    var $img_container = $('#council-member-photo');
    var $image = $('<img />').attr("src", data.photo_url);
    $img_container.html($image);

    var $contact_container = $('#council-member-contact');
    $contact_container.html('');
    data.phones.forEach((phone) => {
      // TODO(vicki): format phone number
      var phoneNumber = phone[1];
      if (phoneNumber) {
        $contact_container.append($('<p />').html($('<a />').attr("href", `tel:${phoneNumber}`).text(phoneNumber)));
      }
    });
    data.emails.forEach((email) => {
      $contact_container.append($('<p />').html($('<a />').attr("href", `mailto:${email}`).text(email)));
    });
    if (data.social) {
      if (data.social.facebook_urls) {
        $contact_container.append($('<p />').html($('<a />').attr("href", data.social.facebook_urls[0]).text('Facebook')));
      }
      if (data.social.instagram_urls) {
        $contact_container.append($('<p />').html($('<a />').attr("href", data.social.instagram_urls[0]).text('Instagram')));
      }
      if (data.social.twitter_urls) {
        $contact_container.append($('<p />').html($('<a />').attr("href", data.social.twitter_urls[0]).text('Twitter')));
      }
    }
    var $parent = $('#council-member');
    $parent.css("display", "flex");
  });
}
