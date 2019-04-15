var cityData = [
  {
    "name": "Adams County",
    "pop": 503375
  },
  {
    "name": "Alamosa County",
    "pop": 16056
  },
  {
    "name": "Arapahoe County",
    "pop": 643257
  },
  {
    "name": "Archuleta County",
    "pop": 13316
  },
  {
    "name": "Baca County",
    "pop": 3539
  },
  {
    "name": "Bent County",
    "pop": 5866
  },
  {
    "name": "Boulder County",
    "pop": 322854
  },
  {
    "name": "Broomfield County",
    "pop": 68169
  },
  {
    "name": "Chaffee County",
    "pop": 19623
  },
  {
    "name": "Cheyenne County",
    "pop": 1835
  },
  {
    "name": "Clear Creek County",
    "pop": 9625
  },
  {
    "name": "Conejos County",
    "pop": 8117
  },
  {
    "name": "Costilla County",
    "pop": 3771
  },
  {
    "name": "Crowley County",
    "pop": 5749
  },
  {
    "name": "Custer County",
    "pop": 4859
  },
  {
    "name": "Delta County",
    "pop": 30578
  },
  {
    "name": "Denver County",
    "pop": 705651
  },
  {
    "name": "Dolores County",
    "pop": 2040
  },
  {
    "name": "Douglas County",
    "pop": 335635
  },
  {
    "name": "Eagle County",
    "pop": 54662
  },
  {
    "name": "Elbert County",
    "pop": 25594
  },
  {
    "name": "El Paso County",
    "pop": 701283
  },
  {
    "name": "Fremont County",
    "pop": 47521
  },
  {
    "name": "Garfield County",
    "pop": 59167
  },
  {
    "name": "Gilpin County",
    "pop": 6000
  },
  {
    "name": "Grand County",
    "pop": 15297
  },
  {
    "name": "Gunnison County",
    "pop": 16871
  },
  {
    "name": "Hinsdale County",
    "pop": 791
  },
  {
    "name": "Huerfano County",
    "pop": 6605
  },
  {
    "name": "Jackson County",
    "pop": 1375
  },
  {
    "name": "Jefferson County",
    "pop": 575193
  },
  {
    "name": "Kiowa County",
    "pop": 1364
  },
  {
    "name": "Kit Carson County",
    "pop": 7154
  },
  {
    "name": "Lake County",
    "pop": 7705
  },
  {
    "name": "La Plata County",
    "pop": 55619
  },
  {
    "name": "Larimer County",
    "pop": 343853
  },
  {
    "name": "Las Animas County",
    "pop": 14197
  },
  {
    "name": "Lincoln County",
    "pop": 5526
  },
  {
    "name": "Logan County",
    "pop": 21893
  },
  {
    "name": "Mesa County",
    "pop": 151900
  },
  {
    "name": "Mineral County",
    "pop": 752
  },
  {
    "name": "Moffat County",
    "pop": 13112
  },
  {
    "name": "Montezuma County",
    "pop": 26074
  },
  {
    "name": "Montrose County",
    "pop": 41763
  },
  {
    "name": "Morgan County",
    "pop": 28075
  },
  {
    "name": "Otero County",
    "pop": 18370
  },
  {
    "name": "Ouray County",
    "pop": 4783
  },
  {
    "name": "Park County",
    "pop": 17892
  },
  {
    "name": "Phillips County",
    "pop": 4275
  },
  {
    "name": "Pitkin County",
    "pop": 17875
  },
  {
    "name": "Prowers County",
    "pop": 12004
  },
  {
    "name": "Pueblo County",
    "pop": 165974
  },
  {
    "name": "Rio Blanco County",
    "pop": 6345
  },
  {
    "name": "Rio Grande County",
    "pop": 11251
  },
  {
    "name": "Routt County",
    "pop": 25178
  },
  {
    "name": "Saguache County",
    "pop": 6631
  },
  {
    "name": "San Juan County",
    "pop": 714
  },
  {
    "name": "San Miguel County",
    "pop": 7967
  },
  {
    "name": "Sedgwick County",
    "pop": 2314
  },
  {
    "name": "Summit County",
    "pop": 30555
  },
  {
    "name": "Teller County",
    "pop": 24625
  },
  {
    "name": "Washington County",
    "pop": 4921
  },
  {
    "name": "Weld County",
    "pop": 304435
  },
  {
    "name": "Yuma County",
    "pop": 10075
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
