var cityData = [
  {
    "name": "Adams County",
    "pop": 519572
  },
  {
    "name": "Alamosa County",
    "pop": 16376
  },
  {
    "name": "Arapahoe County",
    "pop": 655070
  },
  {
    "name": "Archuleta County",
    "pop": 13359
  },
  {
    "name": "Baca County",
    "pop": 3506
  },
  {
    "name": "Bent County",
    "pop": 5650
  },
  {
    "name": "Boulder County",
    "pop": 330758
  },
  {
    "name": "Broomfield County",
    "pop": 74112
  },
  {
    "name": "Chaffee County",
    "pop": 19476
  },
  {
    "name": "Cheyenne County",
    "pop": 1748
  },
  {
    "name": "Clear Creek County",
    "pop": 9397
  },
  {
    "name": "Conejos County",
    "pop": 7461
  },
  {
    "name": "Costilla County",
    "pop": 3499
  },
  {
    "name": "Crowley County",
    "pop": 5922
  },
  {
    "name": "Custer County",
    "pop": 4704
  },
  {
    "name": "Delta County",
    "pop": 31196
  },
  {
    "name": "Denver County",
    "pop": 715522
  },
  {
    "name": "Dolores County",
    "pop": 2326
  },
  {
    "name": "Douglas County",
    "pop": 357978
  },
  {
    "name": "Eagle County",
    "pop": 55731
  },
  {
    "name": "Elbert County",
    "pop": 26062
  },
  {
    "name": "El Paso County",
    "pop": 730395
  },
  {
    "name": "Fremont County",
    "pop": 48939
  },
  {
    "name": "Garfield County",
    "pop": 61685
  },
  {
    "name": "Gilpin County",
    "pop": 5808
  },
  {
    "name": "Grand County",
    "pop": 15717
  },
  {
    "name": "Gunnison County",
    "pop": 16918
  },
  {
    "name": "Hinsdale County",
    "pop": 788
  },
  {
    "name": "Huerfano County",
    "pop": 6820
  },
  {
    "name": "Jackson County",
    "pop": 1379
  },
  {
    "name": "Jefferson County",
    "pop": 582910
  },
  {
    "name": "Kiowa County",
    "pop": 1446
  },
  {
    "name": "Kit Carson County",
    "pop": 7087
  },
  {
    "name": "Lake County",
    "pop": 7436
  },
  {
    "name": "La Plata County",
    "pop": 55638
  },
  {
    "name": "Larimer County",
    "pop": 359066
  },
  {
    "name": "Las Animas County",
    "pop": 14555
  },
  {
    "name": "Lincoln County",
    "pop": 5675
  },
  {
    "name": "Logan County",
    "pop": 21528
  },
  {
    "name": "Mesa County",
    "pop": 155703
  },
  {
    "name": "Mineral County",
    "pop": 865
  },
  {
    "name": "Moffat County",
    "pop": 13292
  },
  {
    "name": "Montezuma County",
    "pop": 25849
  },
  {
    "name": "Montrose County",
    "pop": 42679
  },
  {
    "name": "Morgan County",
    "pop": 29111
  },
  {
    "name": "Otero County",
    "pop": 18690
  },
  {
    "name": "Ouray County",
    "pop": 4874
  },
  {
    "name": "Park County",
    "pop": 17390
  },
  {
    "name": "Phillips County",
    "pop": 4530
  },
  {
    "name": "Pitkin County",
    "pop": 17358
  },
  {
    "name": "Prowers County",
    "pop": 11999
  },
  {
    "name": "Pueblo County",
    "pop": 168162
  },
  {
    "name": "Rio Blanco County",
    "pop": 6529
  },
  {
    "name": "Rio Grande County",
    "pop": 11539
  },
  {
    "name": "Routt County",
    "pop": 24829
  },
  {
    "name": "Saguache County",
    "pop": 6368
  },
  {
    "name": "San Juan County",
    "pop": 705
  },
  {
    "name": "San Miguel County",
    "pop": 8072
  },
  {
    "name": "Sedgwick County",
    "pop": 2404
  },
  {
    "name": "Summit County",
    "pop": 31055
  },
  {
    "name": "Teller County",
    "pop": 24710
  },
  {
    "name": "Washington County",
    "pop": 4817
  },
  {
    "name": "Weld County",
    "pop": 328981
  },
  {
    "name": "Yuma County",
    "pop": 9988
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

  $('.entry').click(function(){

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
