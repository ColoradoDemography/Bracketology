var cityData = [
  {
    "name": "Adams County",
    "pop": 533580
  },
  {
    "name": "Alamosa County",
    "pop": 16648
  },
  {
    "name": "Arapahoe County",
    "pop": 655760
  },
  {
    "name": "Archuleta County",
    "pop": 14178
  },
  {
    "name": "Baca County",
    "pop": 3374
  },
  {
    "name": "Bent County",
    "pop": 5686
  },
  {
    "name": "Boulder County",
    "pop": 326663
  },
  {
    "name": "Broomfield County",
    "pop": 76853
  },
  {
    "name": "Chaffee County",
    "pop": 20598
  },
  {
    "name": "Cheyenne County",
    "pop": 1719
  },
  {
    "name": "Clear Creek County",
    "pop": 9153
  },
  {
    "name": "Conejos County",
    "pop": 7497
  },
  {
    "name": "Costilla County",
    "pop": 3636
  },
  {
    "name": "Crowley County",
    "pop": 5638
  },
  {
    "name": "Custer County",
    "pop": 5546
  },
  {
    "name": "Delta County",
    "pop": 31778
  },
  {
    "name": "Denver County",
    "pop": 715636
  },
  {
    "name": "Dolores County",
    "pop": 2270
  },
  {
    "name": "Douglas County",
    "pop": 383911
  },
  {
    "name": "Eagle County",
    "pop": 54411
  },
  {
    "name": "Elbert County",
    "pop": 28795
  },
  {
    "name": "El Paso County",
    "pop": 744153
  },
  {
    "name": "Fremont County",
    "pop": 50359
  },
  {
    "name": "Garfield County",
    "pop": 62722
  },
  {
    "name": "Gilpin County",
    "pop": 5925
  },
  {
    "name": "Grand County",
    "pop": 15971
  },
  {
    "name": "Gunnison County",
    "pop": 17321
  },
  {
    "name": "Hinsdale County",
    "pop": 772
  },
  {
    "name": "Huerfano County",
    "pop": 7063
  },
  {
    "name": "Jackson County",
    "pop": 1311
  },
  {
    "name": "Jefferson County",
    "pop": 576381
  },
  {
    "name": "Kiowa County",
    "pop": 1376
  },
  {
    "name": "Kit Carson County",
    "pop": 7007
  },
  {
    "name": "Lake County",
    "pop": 7376
  },
  {
    "name": "La Plata County",
    "pop": 56453
  },
  {
    "name": "Larimer County",
    "pop": 370639
  },
  {
    "name": "Las Animas County",
    "pop": 14373
  },
  {
    "name": "Lincoln County",
    "pop": 5500
  },
  {
    "name": "Logan County",
    "pop": 20607
  },
  {
    "name": "Mesa County",
    "pop": 159637
  },
  {
    "name": "Mineral County",
    "pop": 935
  },
  {
    "name": "Moffat County",
    "pop": 13317
  },
  {
    "name": "Montezuma County",
    "pop": 26563
  },
  {
    "name": "Montrose County",
    "pop": 44167
  },
  {
    "name": "Morgan County",
    "pop": 29559
  },
  {
    "name": "Otero County",
    "pop": 18115
  },
  {
    "name": "Ouray County",
    "pop": 5160
  },
  {
    "name": "Park County",
    "pop": 18101
  },
  {
    "name": "Phillips County",
    "pop": 4465
  },
  {
    "name": "Pitkin County",
    "pop": 16642
  },
  {
    "name": "Prowers County",
    "pop": 11745
  },
  {
    "name": "Pueblo County",
    "pop": 169427
  },
  {
    "name": "Rio Blanco County",
    "pop": 6576
  },
  {
    "name": "Rio Grande County",
    "pop": 11210
  },
  {
    "name": "Routt County",
    "pop": 25064
  },
  {
    "name": "Saguache County",
    "pop": 6681
  },
  {
    "name": "San Juan County",
    "pop": 803
  },
  {
    "name": "San Miguel County",
    "pop": 7855
  },
  {
    "name": "Sedgwick County",
    "pop": 2313
  },
  {
    "name": "Summit County",
    "pop": 30441
  },
  {
    "name": "Teller County",
    "pop": 24631
  },
  {
    "name": "Washington County",
    "pop": 4843
  },
  {
    "name": "Weld County",
    "pop": 359530
  },
  {
    "name": "Yuma County",
    "pop": 9881
  }
];

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  var cities = shuffle(cityData);
  var cities2 = cities;
  var round1slots = $('.round1');

  var i;
  for (i = 0; i < 64; i++) {
    var city = cities.shift();
    cities[cities.length] = city;
    round1slots[i].textContent = city["name"];
    round1slots[i].setAttribute("data-pop", city["pop"]);
    round1slots[i].classList.add("active")
  }

  function myFunction(){
      var checkBox = document.getElementById("myCheck");
      var round1 = document.getElementsByClassName("round1");
      if (checkBox.checked == true){
         var i;
         for (i = 0; i < 64; i++) {
           var city = cities.shift();
           cities[cities.length] = city;
           document.getElementsByClassName("round1")[i].title = commafy(city["pop"]);
         }
      } else {
         var i;
         for (i = 0; i < 64; i++) {
           var city = cities.shift();
           cities[cities.length] = city;
           document.getElementsByClassName("round1")[i].title = '';
         }
      }
  }

  function incrementScore() {
    currentScore = parseInt($("#score-total").text())
    $("#score-total").text(currentScore+1)
  }

  $('.entry').on("click", function(){

    classes = $(this).attr("class")
    round = classes.match(/round\d{1,2}/g)[0]
    matchup = classes.match(/matchup\d{1,2}/g)[0]
    number = classes.match(/number\d/g)[0]

    opponentNumber = (number == 'number1' ? 'number2' : 'number1')
    opponent = "." + round + "." + matchup + "." + opponentNumber

    if($(this).hasClass("active") && $(opponent).hasClass("active")) {

      answerPopulation = parseInt($(this).data("pop"))
      opponentPopulation = parseInt($(opponent).data("pop"))

      roundNumber = parseInt(round.match(/\d{1,2}/g))
      nextRoundNumber = roundNumber + 1

      matchupNumber = parseInt(matchup.match(/\d{1,2}/g))
      nextMatchupNumber = Math.round(matchupNumber/2,0)

      if (nextMatchupNumber > matchupNumber/2) {
        nextNumber = "number1"
        nextOpponentNumber = "number2"
      } else {
        nextNumber = "number2"
        nextOpponentNumber = "number1"
      }

      nextRound = ".round" + nextRoundNumber + ".matchup" + nextMatchupNumber + "." + nextNumber;

      if (answerPopulation > opponentPopulation) {
        $(this).toggleClass("correct")
        $(nextRound).text($(this).text())
        $(nextRound).data("pop", $(this).data("pop"))
        $(nextRound).toggleClass("active")
        incrementScore();
      } else {
        $(this).toggleClass("incorrect")
        $(nextRound).text($(opponent).text())
        $(nextRound).data("pop", $(opponent).data("pop"))
        $(nextRound).toggleClass("active")
      }

      $(this).toggleClass("active");
      $(opponent).toggleClass("active");

    }

  });

//Accessible clicker
$('.entry').on("keyup", function(e){
  if (e.key === "Enter"){
  classes = $(this).attr("class")
    round = classes.match(/round\d{1,2}/g)[0]
    matchup = classes.match(/matchup\d{1,2}/g)[0]
    number = classes.match(/number\d/g)[0]

    opponentNumber = (number == 'number1' ? 'number2' : 'number1')
    opponent = "." + round + "." + matchup + "." + opponentNumber

    if($(this).hasClass("active") && $(opponent).hasClass("active")) {

      answerPopulation = parseInt($(this).data("pop"))
      opponentPopulation = parseInt($(opponent).data("pop"))

      roundNumber = parseInt(round.match(/\d{1,2}/g))
      nextRoundNumber = roundNumber + 1

      matchupNumber = parseInt(matchup.match(/\d{1,2}/g))
      nextMatchupNumber = Math.round(matchupNumber/2,0)

      if (nextMatchupNumber > matchupNumber/2) {
        nextNumber = "number1"
        nextOpponentNumber = "number2"
      } else {
        nextNumber = "number2"
        nextOpponentNumber = "number1"
      }

      nextRound = ".round" + nextRoundNumber + ".matchup" + nextMatchupNumber + "." + nextNumber;

      if (answerPopulation > opponentPopulation) {
        $(this).toggleClass("correct")
        $(nextRound).text($(this).text())
        $(nextRound).data("pop", $(this).data("pop"))
        $(nextRound).toggleClass("active")
        incrementScore();
      } else {
        $(this).toggleClass("incorrect")
        $(nextRound).text($(opponent).text())
        $(nextRound).data("pop", $(opponent).data("pop"))
        $(nextRound).toggleClass("active")
      }

      $(this).toggleClass("active");
      $(opponent).toggleClass("active");

    }
  }
});


 function commafy(nStr) {
        var x, x1, x2, rgx;
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
  }
