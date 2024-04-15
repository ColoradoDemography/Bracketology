var cityData = [
  {
    "name": "Adams County",
    "pop": 527501
  },
  {
    "name": "Alamosa County",
    "pop": 16575
  },
  {
    "name": "Arapahoe County",
    "pop": 656015
  },
  {
    "name": "Archuleta County",
    "pop": 13986
  },
  {
    "name": "Baca County",
    "pop": 3431
  },
  {
    "name": "Bent County",
    "pop": 5400
  },
  {
    "name": "Boulder County",
    "pop": 327424
  },
  {
    "name": "Broomfield County",
    "pop": 76155
  },
  {
    "name": "Chaffee County",
    "pop": 20261
  },
  {
    "name": "Cheyenne County",
    "pop": 1722
  },
  {
    "name": "Clear Creek County",
    "pop": 9366
  },
  {
    "name": "Conejos County",
    "pop": 7572
  },
  {
    "name": "Costilla County",
    "pop": 3614
  },
  {
    "name": "Crowley County",
    "pop": 5620
  },
  {
    "name": "Custer County",
    "pop": 5338
  },
  {
    "name": "Delta County",
    "pop": 31581
  },
  {
    "name": "Denver County",
    "pop": 712637
  },
  {
    "name": "Dolores County",
    "pop": 2203
  },
  {
    "name": "Douglas County",
    "pop": 376026
  },
  {
    "name": "Eagle County",
    "pop": 55291
  },
  {
    "name": "Elbert County",
    "pop": 27821
  },
  {
    "name": "El Paso County",
    "pop": 740552
  },
  {
    "name": "Fremont County",
    "pop": 49570
  },
  {
    "name": "Garfield County",
    "pop": 62254
  },
  {
    "name": "Gilpin County",
    "pop": 5895
  },
  {
    "name": "Grand County",
    "pop": 15748
  },
  {
    "name": "Gunnison County",
    "pop": 17269
  },
  {
    "name": "Hinsdale County",
    "pop": 779
  },
  {
    "name": "Huerfano County",
    "pop": 7104
  },
  {
    "name": "Jackson County",
    "pop": 1314
  },
  {
    "name": "Jefferson County",
    "pop": 575936
  },
  {
    "name": "Kiowa County",
    "pop": 1428
  },
  {
    "name": "Kit Carson County",
    "pop": 6974
  },
  {
    "name": "Lake County",
    "pop": 7342
  },
  {
    "name": "La Plata County",
    "pop": 56557
  },
  {
    "name": "Larimer County",
    "pop": 366843
  },
  {
    "name": "Las Animas County",
    "pop": 14297
  },
  {
    "name": "Lincoln County",
    "pop": 5513
  },
  {
    "name": "Logan County",
    "pop": 20809
  },
  {
    "name": "Mesa County",
    "pop": 158534
  },
  {
    "name": "Mineral County",
    "pop": 924
  },
  {
    "name": "Moffat County",
    "pop": 13166
  },
  {
    "name": "Montezuma County",
    "pop": 26464
  },
  {
    "name": "Montrose County",
    "pop": 43799
  },
  {
    "name": "Morgan County",
    "pop": 28296
  },
  {
    "name": "Otero County",
    "pop": 18294
  },
  {
    "name": "Ouray County",
    "pop": 5088
  },
  {
    "name": "Park County",
    "pop": 17900
  },
  {
    "name": "Phillips County",
    "pop": 4435
  },
  {
    "name": "Pitkin County",
    "pop": 16856
  },
  {
    "name": "Prowers County",
    "pop": 11850
  },
  {
    "name": "Pueblo County",
    "pop": 169383
  },
  {
    "name": "Rio Blanco County",
    "pop": 6558
  },
  {
    "name": "Rio Grande County",
    "pop": 11336
  },
  {
    "name": "Routt County",
    "pop": 25027
  },
  {
    "name": "Saguache County",
    "pop": 6616
  },
  {
    "name": "San Juan County",
    "pop": 801
  },
  {
    "name": "San Miguel County",
    "pop": 7993
  },
  {
    "name": "Sedgwick County",
    "pop": 2297
  },
  {
    "name": "Summit County",
    "pop": 30583
  },
  {
    "name": "Teller County",
    "pop": 24852
  },
  {
    "name": "Washington County",
    "pop": 4835
  },
  {
    "name": "Weld County",
    "pop": 350206
  },
  {
    "name": "Yuma County",
    "pop": 9920
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
function OnClick(){
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
};

 function onKeyUp(e){
   if (e.key === "Enter") OnClick();
 }
  
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
