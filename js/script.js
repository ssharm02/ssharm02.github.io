$(document).ready(function() {
  //Project cards
  const projectData = [
    {
      title: 'Knights Tour C#',
      Developed: 'Developed in Summer 2017 for C# class assignment',
      text:
        '<p>Assignment completed for C# during Summer 2017.  Implements heuristic method and non-intelligent method<br><b>URL: </b> <a href="https://github.com/ssharm02/Knights_Tour_Algorithm" target="_blank"><i>Knights Tour GitHub</i></a><p><b>Code:</b> C#<br><b>GUI: </b> Windows Forms</p>',

      image: ['../image/knightstour.png'],
      site: [
        [
          'Github',
          'fa fa-github',
          'https://github.com/ssharm02/Knights_Tour_Algorithm'
        ]
      ]
    },
    {
      title: 'edu-counselor React',
      Developed: 'Sep 2018 - Dec 2018 for Sheridan Capstone Project',
      text:
        '<p>Full stack MEARN application made using latest Javascript technologies. <br><b>URL: </b> <a href="https://cryptic-ocean-62097.herokuapp.com/" target="_blank"><i>React Web App</i></a><br><p><b>Code:</b> JavaScript<br><b>Stack:</b> mongoDB, Redux, React, nodeJS, JavaScript</p>',

      image: ['../image/EduCoun.PNG'],
      site: [
        [
          'Github',
          'fab fa-github',
          'https://www.youtube.com/watch?v=K_cq7YzAh8M/'
        ]
      ]
    },
    {
      title: 'Weather App jQuery',
      Developed: 'Summer 2017 for jQuery class',
      text:
        '<p>Mobile App Development Final Project, Gets local weather via geolocation, visualize data using charts.js <br><b>URL: </b> <a href="https://github.com/ssharm02/Mobile_Weather_App" target="_blank"><i>Mobile Weather App</i></a><br><b>Code:</b> jQuery, HTML5, CSS, JavaScript<br><b>Data:</b> Open Weather Map API</p>',

      image: ['../image/weather.png'],
      site: [
        [
          'Github',
          'fab fa-github',
          'https://github.com/ssharm02/Mobile_Weather_App'
        ]
      ]
    },
    {
      title: 'Free Code Camp',
      Developed: 'Started 2017 - ongoing part of learning',
      text:
        '<p>FreeCodeCamp JavaScript Work.  Contains lots of JavaScript learning material I completed, <br> <b>URL: </b> <a href="https://github.com/ssharm02/Free_Code_Camp_Work" target="_blank"><i>FreeCodeCamp Repository</i></a><br></p>',

      image: ['../image/JavaScript.png'],
      site: [
        [
          'Github',
          'fab fa-github',
          'https://github.com/ssharm02/Free_Code_Camp_Work'
        ]
      ]
    },
    {
      title: 'Chat App Swift',
      Developed: 'January 2018 for iOS class @ Sheridan',
      text:
        '<p>Stores user text messages on Google Firebase. User registeration & authentication also handeled via Firebase, <br> <b>URL: </b> <a href="https://github.com/ssharm02/Chat_App_iOS" target="_blank"><i>WhatsApp Clone</i></a><br><p><b>Code:</b> Swift<br><b>Database:</b> Google Firebase</p>',

      image: ['../image/chat.jpg'],
      site: [
        ['Github', 'fab fa-github', 'https://github.com/ssharm02/Chat_App_iOS']
      ]
    },
    {
      title: 'Encryption Java',
      Developed: 'April 2017 for OOP Java 2',
      text:
        '<p>OOP Java 2 Assignment.  Implements file reading and writing, encypt text from files and text-field, <br> <b>URL: </b><a href="https://github.com/ssharm02/Hash_Map_Encryption" target="_blank"><i>Encryption Java Link</i></a><br><b>Code:</b> Java <br><b>GUI: </b>Java Scene Builder</p>',

      image: ['../image/encrypt.jpg'],
      site: [
        [
          'Github',
          'fab fa-github',
          'https://github.com/ssharm02/Hash_Map_Encryption'
        ]
      ]
    },
    {
      title: 'NutriFit Swift',
      text:
        '<p>Abandoned Capstone Project @ Sheridan. <br><b>URL: </b> <a href="https://github.com/ssharm02/Nutrition_App_iOS" target="_blank"><i>NutriFit iOS Github</i></a><br><p><b>Code:</b> Swift<br><b>Halted!</p>',

      image: ['../image/Nutrition.jpg'],
      site: [
        [
          'Github',
          'fab fa-github',
          'https://github.com/ssharm02/Nutrition_App_iOS'
        ]
      ]
    },
    {
      title: 'Helicopter Wars Java',
      text:
        '<p>Android 2D-Game. Random stages, music, collision detection <br><b>URL: </b> <a href="https://github.com/ssharm02/HelicopterWars-Libgdx" target="_blank"><i>Helicopter Wars Android Github</i></a><br><p><b>Code:</b> Java, Android Studio, GDX Library Android<br><b></p>',

      image: ['../image/HeliOne.png'],
      site: [
        [
          'Github',
          'fab fa-github',
          'https://github.com/ssharm02/HelicopterWars-Libgdx'
        ]
      ]
    },
    {
      title: 'Space Dodger Swift',
      text:
        '<p>Spritkit Game. high scores dBase, tvOS, mapkit <br><b>URL: </b> <a href="https://github.com/ssharm02/SpaceDodger" target="_blank"><i>Space Dodger Swift Spritekit Github</i></a><br><p><b>Code:</b> Swift, Xcode, SpriteKit<br><b></p>',

      image: ['../image/UFO.png'],
      site: [
        ['Github', `fa fa-github`, 'https://github.com/ssharm02/SpaceDodger']
      ]
    },
    {
      title: 'Make Change Java',
      text:
        '<p>OOP Java 2 Assignment. <br> Shows user bill coins to dispense when change is entered., <br><b>URL: </b><a href="https://github.com/ssharm02/Make_Change_GUI" target="_blank"><i>Make Change GitHub link</i></a><br><b>Code:</b> Java <br><b>GUI: </b>Java FX</p>',

      image: ['../image/change.jpg'],
      site: [
        ['Github', 'fa-github', 'https://github.com/ssharm02/Make_Change_GUI']
      ]
    },
    {
      title: 'MasterMind Java',
      text:
        '<p>OOP Java 2 Assignment. <br> Numerical version of popular Mastermind game <br><b>URL: </b><a href="https://github.com/ssharm02/Master-Mind" target="_blank"><i>MasterMind Java</i></a><br><p><b>Code:</b> Java<br><b>GUI:</b> System.out.println :P</p>',

      image: ['../image/mastermind_logo_new.jpg'],
      site: [['Github', 'fa-github', 'https://github.com/ssharm02/Master-Mind']]
    },
    {
      title: 'Jeopardy Angular',
      text:
        '<p>Angular project.  Connects to opentdb API, get random questions. <br><b>URL: </b> <a href="https://github.com/ssharm02/JeopardyAngular" target="_blank"><i>Angular Jeopardy Game</i></a><br><p><b>Code:</b> Angular<br></p>',

      image: ['../image/Jeopardy.jpg'],
      site: [
        ['Github', 'fa-github', 'https://github.com/ssharm02/JeopardyAngular']
      ]
    }
  ];

  // add listener to all the cards for click flipping
  addListener = () => {
    let cards = document.querySelectorAll('.card.effect_click');

    for (let i = 0; i < cards.length; i++) {
      clickListener(cards[i]);
    }

    function clickListener(card) {
      card.addEventListener('mouseover', function() {
        this.classList.toggle('flipped');
      });
      card.addEventListener('mouseout', function() {
        this.classList.toggle('flipped');
      });
    }
  };
  /*
   * Randomize projects
   */
  randomizeProjects = () => {
    for (let i = projectData.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = projectData[i];
      projectData[i] = projectData[j];
      projectData[j] = temp;
    }
  };

  showProjectCards = () => {
    let html = '';

    // console.log(projectData.length);
    //randomize the projects
    randomizeProjects();

    projectData.forEach(function(project) {
      html += `<div class="col-sm-6 col-md-4">`;
      html += `<div class="card effect_click"><div class="card_front">`;
      html += `<figure><img class="img-responsive" src="img/${project.image[0]}">`;
      html += `<figcaption class="project-title">`;
      html += `${project.title}`;
      html += '</figcaption></figure></div>';

      html += `<div class="card_back"><figure>`;
      html += `<div class="project-title">${project.title}</div>`;
      html += `<figcaption">`;
      html += `<div class="project-body">${project.text}</div>`;
      html += `<div><a data-toggle="tooltip" title="${project.site[0][0]}" data-placement="top" href="${project.site[0][2]}" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ${project.site[0][1]}" aria-hidden="true"></i></a>`;

      if (typeof project.site[1] !== 'undefined') {
        html += `<a data-toggle="tooltip" title="${project.site[1][0]}" data-placement="top" href="${project.site[1][2]}" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa${project.site[1][1]}" aria-hidden="true"></i></a>`;
      }

      html += `</div></figcaption></figure></div>`;
      html += `</div>`;
      html += `</div>`;
    });

    $('#theProjects').append(html);

    addListener();
  };
  showProjectCards();
});
