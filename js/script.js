$(document).ready(function() {

  

  var projectData = [{
    title: 'Knights Tour C#',
    text: '<p>Assignment completed for C# during Summer 2017.  Implements "intelligent" heuristic method and non-intelligent method<br><b>URL: </b> <a href="https://github.com/ssharm02/Knights_Tour_Algorithm" target="_blank"><i>Knights Tour GitHub</i></a><p><b>Code:</b> C#<br><b>GUI: </b> Windows Forms</p>',

    image: ['../image/knightstour.png'],
    site: 
    [
      ['Github', 'fa-github', 'https://github.com/ssharm02/Knights_Tour_Algorithm']
    ]
  }, {
    title: 'MasterMind Java',
    text: '<p>OOP Java 2 Assignment. <br> Numerical version of popular Mastermind game <br><b>URL: </b><a href="https://github.com/ssharm02/Master-Mind" target="_blank"><i>MasterMind Java</i></a><br><p><b>Code:</b> Java<br><b>GUI:</b> System.out.println :P</p>',

    image: ['../image/master.jpg'],
    site: 
    [
      ['Github', 'fa-github', 'https://github.com/ssharm02/Master-Mind']
    ]
  }, {
    title: 'Crypto Ticker iOS',
    text: '<p>Swift project.  Connects to a bitcoin API, get realtime currency conversion for various crypto coins. <br><b>URL: </b> <a href="https://github.com/ssharm02/Crypto_Coin_Ticker_iOS" target="_blank"><i>Crypto Currency Converter</i></a><br><p><b>Code:</b> Swift<br><b>Data:</b> BitCoinAverage API</p>',

    image: ['../image/crypto.jpg'],
    site: [
      ['Github','fa-github', 'https://github.com/ssharm02/Crypto_Coin_Ticker_iOS']
    ]
  }, 
  {
    title: 'Weather App jQuery',
    text: '<p>Mobile App Development Final Project, Gets local weather via geolocation, visualize data using charts.js <br><b>URL: </b> <a href="https://github.com/ssharm02/Mobile_Weather_App" target="_blank"><i>Mobile Weather App</i></a><br><b>Code:</b> jQuery, HTML5, CSS, JavaScript<br><b>Data:</b> Open Weather Map API</p>',

    image: ['../image/weather.png'],
    site: [
      ['Github','fa-github', 'https://github.com/ssharm02/Mobile_Weather_App']
    ]
  }, {
    title: 'Free Code Camp',
    text: '<p>FreeCodeCamp Certification Work I have completed.  Includes Basic, Intermediate and Advance JavaScript algorithm functions and projects, <br> <b>URL: </b> <a href="https://github.com/ssharm02/Free_Code_Camp_Work" target="_blank"><i>FreeCodeCamp Repository</i></a><br></p>',

    image: ['../image/freecc2.png'],
    site: [
      ['Github','fa-github', 'https://github.com/ssharm02/Free_Code_Camp_Work']
    ]
  },
  {
    title: 'WhatsApp Clone iOS',
    text: '<p>Stores user text messages on Google Firebase. User registeration & authentication also handeled via Firebase, <br> <b>URL: </b> <a href="https://github.com/ssharm02/Chat_App_iOS" target="_blank"><i>WhatsApp Clone</i></a><br><p><b>Code:</b> Swift<br><b>Database:</b> Google Firebase</p>',

    image: ['../image/chat.jpg'],
    site: [
      ['Github', 'fa-github', 'https://github.com/ssharm02/Chat_App_iOS']
    ]
  },
  {
    title: 'Make Change Java',
    text: '<p>OOP Java 2 Assignment. <br> Shows user bill coins to dispense when change is entered., <br><b>URL: </b><a href="https://github.com/ssharm02/Make_Change_GUI" target="_blank"><i>Make Change GitHub link</i></a><br><b>Code:</b> Java <br><b>GUI: </b>Java FX</p>',

    image: ['../image/change.jpg'],
    site: [
      ['Github', 'fa-github', 'https://github.com/ssharm02/Make_Change_GUI']
    ]
  },
  {
    title: 'Encryption Java',
    text: '<p>OOP Java 2 Assignment.  Implements file reading and writing, encypt text from files and text-field, <br> <b>URL: </b><a href="https://github.com/ssharm02/Hash_Map_Encryption" target="_blank"><i>Encryption Java Link</i></a><br><b>Code:</b> Java <br><b>GUI: </b>Java Scene Builder</p>',

    image: ['../image/encrypt.jpg'],
    site: [
      ['Github', 'fa-github', 'https://github.com/ssharm02/Hash_Map_Encryption']
    ]
  },
  {
    title: 'Clima iOS',
    text: '<p>Clima iOS, get location via location manager and show local weather <br><b>URL: </b> <a href="https://github.com/ssharm02/Clima_iOS" target="_blank"><i>Clima iOS Github</i></a><br><p><b>Code:</b> Swift<br><b>Data:</b> Open Weather Map API</p>',

    image: ['../image/clima.jpg'],
    site: [
      ['Github', 'fa-github', 'https://github.com/ssharm02/Clima_iOS']
    ]
  },
  {
    title: 'NutriFit iOS',
    text: '<p>Abandoned Capstone Project @ Sheridan. <br><b>URL: </b> <a href="https://github.com/ssharm02/Nutrition_App_iOS" target="_blank"><i>NutriFit iOS Github</i></a><br><p><b>Code:</b> Swift<br><b>Halted!</p>',

    image: ['../image/Nutrition.jpg'],
    site: [
      ['Github', 'fa-github', 'https://github.com/ssharm02/Nutrition_App_iOS']
    ]
  },
  {
    title: 'FlappyBird Android',
    text: '<p>Android 2D-Game. <br><b>URL: </b> <a href="https://github.com/ssharm02/FlappyBird-Android_GDX" target="_blank"><i>FlappyBird Android Github</i></a><br><p><b>Code:</b> Java, Android Studio, GDX Library Android<br><b>!</p>',

    image: ['../image/flappybird.png'],
    site: [
      ['Github', 'fa-github', 'https://github.com/ssharm02/FlappyBird-Android_GDX']
    ]
  },

  ];

    // add listener to all the cards for click flipping
    function addListener() {
      var cards = document.querySelectorAll(".card.effect_click");

      for (var i = 0; i < cards.length; i++) {
        clickListener(cards[i]);
      }

      function clickListener(card) {
        card.addEventListener("mouseover", function() {
          this.classList.toggle("flipped");
        });
        card.addEventListener("mouseout", function() {
          this.classList.toggle("flipped");
        });
      }
    }
  /*
  * Randomize projects 
  */
  function randomizeProjects(){
    for (var i = projectData.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = projectData[i];
      projectData[i] = projectData[j];
      projectData[j] = temp;
  }
}

  function showProjectCards() {
      var html = '';

      console.log(projectData.length);
      //randomize the projects 
      randomizeProjects();

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
        html += '<div><a data-toggle="tooltip" title="' + project.site[0][0] + '" data-placement="top" href="' + project.site[0][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' 
        + project.site[0][1] + '" aria-hidden="true"></i></a>';

        if (typeof project.site[1] !== 'undefined') {
          html += '<a data-toggle="tooltip" title="' + project.site[1][0] + '" data-placement="top" href="' + project.site[1][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa '
          + project.site[1][1] + '" aria-hidden="true"></i></a>';
        }

        html += '</div></figcaption></figure></div>';
        html += '</div>';
        html += '</div>';
      });

      $('#theProjects').append(html);

      addListener();
    }
    showProjectCards();

});

(function() {

  document.addEventListener('DOMContentLoaded', function() {

      var gridDiv = document.querySelector('#myGrid');

      var gridOptions = {
          columnDefs: [
              {headerName: 'Class', field: 'A', width: 500},
              {headerName: 'Grade', field: 'B', width: 470},
          ],
          enableSorting: true,
          filter: 'agTextColumnFilter',
          enableRangeSelection: true,
          enableFilter: true,
          animateRows: true,
          enableCellChangeFlash: false,
          refreshCells: false,
          enableColResize: true,
          
      };

      new agGrid.Grid(gridDiv, gridOptions);
      $.getJSON("../data/grades.json", function(json) {
        gridOptions.api.setRowData(json);
    });

    setInterval(function() {
      var sort = [
        {colId: 'A', sort: 'asc'},
        {colId: 'B', sort: 'asc'}
    ];
    // TODO Make Grid more fancy 
      $.getJSON("../data/grades.json", function(json) {
            window.grades = json;
            const rowCount = gridOptions.api.getDisplayedRowCount();
            window.grades.sort(function() { return .5 - Math.random();});
          //  for (let i = 0; i < 10; i++) {
         //   let row = Math.floor(Math.random() * rowCount);
            gridOptions.api.setRowData(grades);
            enableCellChangeFlash=true;
          //  gridOptions.api.flashCells();
          //  gridOptions.api.refreshCells();
          //  }
          });
        }, 8000);
  });
  
  

})();