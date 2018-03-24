$(document).ready(function() {

var projectData = [{
  title: 'Knights Tour',
  text: '<p>C# Assignment, <a href="https://github.com/ssharm02/Knights_Tour_Algorithm" target="_blank"><i>Knights Tour</i></a><p>Features Huristic & non huristic method and GUI</p>',

  image: ['../image/knightstour.png'],
  site: 
  [
    ['Github', 'fa-github', 'https://github.com/ssharm02/Knights_Tour_Algorithm']
  ]
}, {
  title: 'MasterMind',
  text: '<p>Java 2 Assignment, <a href="https://github.com/ssharm02/Master-Mind" target="_blank"><i>MasterMind</i></a><br><p>Numerical MasterMind game<br>Made using Java</p>',

  image: ['../image/master.jpg'],
  site: 
  [
    ['Github', 'fa-github', 'https://github.com/ssharm02/Master-Mind']
  ]
}, {
  title: 'Crypto Coin Ticker',
  text: '<p>Swift project, <a href="https://github.com/ssharm02/Crypto_Coin_Ticker_iOS" target="_blank"><i>Crypto Currency Converter</i></a><br><p>Connects to crypto API, get real time prices and currency conversion<br>Made using Swift</p>',

  image: ['../image/crypto.jpg'],
  site: [
    ['Github','fa-github', 'https://github.com/ssharm02/Crypto_Coin_Ticker_iOS']
  ]
}, {
  title: 'Weather App',
  text: '<p>A Mobile App Development project, <a href="https://github.com/ssharm02/Mobile_Weather_App" target="_blank"><i>Mobile Weather App</i></a><br><p>Made for mobile devices<b>Uses jQuery, HTML5, CSS and Charts.js</p>',

  image: ['../image/weather.png'],
  site: [
    ['Github','fa-github', 'https://github.com/ssharm02/Mobile_Weather_App']
  ]
}, {
  title: 'Free Code Camp',
  text: '<p>FreeCodeCamp Certification Work, <a href="https://github.com/ssharm02/Free_Code_Camp_Work" target="_blank"><i>FreeCodeCamp Repository</i></a><br><p>Basic, Intermediate, Advance Algorithms and Projects<br>HTML5, CSS, jQuery, Javascript</p>',

  image: ['../image/freecc2.png'],
  site: [
    ['Github','fa-github', 'https://github.com/ssharm02/Free_Code_Camp_Work']
  ]
},

{
  title: 'WhatsApp Clone iOS',
  text: '<p>Project completed for a Udemy Course, <a href="https://github.com/ssharm02/Chat_App_iOS" target="_blank"><i>whatsApp Clone for iOS devices</i></a><br><p>Uses Google Firebase for authentication and storing messages<br>Made Using Swift</p>',

  image: ['../image/chat.jpg'],
  site: [
    ['CodePen', 'fa-github', 'https://github.com/ssharm02/Chat_App_iOS']
  ]
},
{
  title: 'Make Change Java',
  text: '<p>Java 2 Assignment <a href="https://github.com/ssharm02/Make_Change_GUI" target="_blank"><i></i></a><br><p>Made using Java and Java Scene Builder</p>',

  image: ['../image/change.jpg'],
  site: [
    ['CodePen', 'fa-github', 'https://github.com/ssharm02/Make_Change_GUI']
  ]
},
{
  title: 'Encryption Java',
  text: '<p>Java 2 Assignment <a href="https://github.com/ssharm02/Hash_Map_Encryption" target="_blank"><i></i></a><br><p>Made using Java hash maps and Java Scene Builder</p>',

  image: ['../image/encrypt.jpg'],
  site: [
    ['CodePen', 'fa-github', 'https://github.com/ssharm02/Hash_Map_Encryption']
  ]
},
{
  title: 'Clima iOS',
  text: '<p>Clima iOS <a href="https://github.com/ssharm02/Clima_iOS" target="_blank"><i></i></a><br><p>Made using Swift, Cocoapods, LocationManager, Weather API</p>',

  image: ['../image/clima.jpg'],
  site: [
    ['CodePen', 'fa-github', 'https://github.com/ssharm02/Clima_iOS']
  ]
}
];

  // add listener to all the cards for click flipping
  function addListener() {
    var cards = document.querySelectorAll(".card.effect_click");

    for (var i = 0; i < cards.length; i++) {
      clickListener(cards[i]);
    }

    function clickListener(card) {
      card.addEventListener("click", function() {
        this.classList.toggle("flipped");
      });
    }
  }

  function showProjectCards() {
    var html = '';

    projectData.forEach(function(project) {
      html += '<div class="col-sm-6 col-md-4">';
      html += '<div class="card effect_click"><div class="card_front">';
      html += '<figure><img class="img-responsive" src="img/' + project.image[0] + '">';
      html += '<figcaption class="project-title">';
      html += project.title;
      html += '</figcaption></figure></div>';

      html += '<div class="card_back"><figure>';
      html += '<div class="project-title">' + project.title + '</div>';
      html += '<figcaption">';
      html += '<div class="project-body">' + project.text + '</div>';
      html += '<div><a data-toggle="tooltip" title="' + project.site[0][0] + '" data-placement="top" href="' + project.site[0][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' + project.site[0][1] + '" aria-hidden="true"></i></a>';

      if (typeof project.site[1] !== 'undefined') {
        html += '<a data-toggle="tooltip" title="' + project.site[1][0] + '" data-placement="top" href="' + project.site[1][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa ' + project.site[1][1] + '" aria-hidden="true"></i></a>';
      }

      html += '</div></figcaption></figure></div>';
      html += '</div>';
      html += '</div>';
    });

    $('#theProjects').append(html);

    addListener();
  }
  showProjectCards();
  //Added smooth scrolling
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});
});
