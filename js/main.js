var cityData = [
  {
    "name": "Adams County",
    "pop": 522515
  },
  {
    "name": "Alamosa County",
    "pop": 16516
  },
  {
    "name": "Arapahoe County",
    "pop": 655581
  },
  {
    "name": "Archuleta County",
    "pop": 13807
  },
  {
    "name": "Baca County",
    "pop": 3489
  },
  {
    "name": "Bent County",
    "pop": 5722
  },
  {
    "name": "Boulder County",
    "pop": 329793
  },
  {
    "name": "Broomfield County",
    "pop": 75363
  },
  {
    "name": "Chaffee County",
    "pop": 20099
  },
  {
    "name": "Cheyenne County",
    "pop": 1715
  },
  {
    "name": "Clear Creek County",
    "pop": 9449
  },
  {
    "name": "Conejos County",
    "pop": 7584
  },
  {
    "name": "Costilla County",
    "pop": 3620
  },
  {
    "name": "Crowley County",
    "pop": 6016
  },
  {
    "name": "Custer County",
    "pop": 5050
  },
  {
    "name": "Delta County",
    "pop": 31673
  },
  {
    "name": "Denver County",
    "pop": 711973
  },
  {
    "name": "Dolores County",
    "pop": 2130
  },
  {
    "name": "Douglas County",
    "pop": 369286
  },
  {
    "name": "Eagle County",
    "pop": 55701
  },
  {
    "name": "Elbert County",
    "pop": 27123
  },
  {
    "name": "El Paso County",
    "pop": 738532
  },
  {
    "name": "Fremont County",
    "pop": 49637
  },
  {
    "name": "Garfield County",
    "pop": 62150
  },
  {
    "name": "Gilpin County",
    "pop": 5885
  },
  {
    "name": "Grand County",
    "pop": 15838
  },
  {
    "name": "Gunnison County",
    "pop": 17298
  },
  {
    "name": "Hinsdale County",
    "pop": 777
  },
  {
    "name": "Huerfano County",
    "pop": 6945
  },
  {
    "name": "Jackson County",
    "pop": 1357
  },
  {
    "name": "Jefferson County",
    "pop": 579654
  },
  {
    "name": "Kiowa County",
    "pop": 1452
  },
  {
    "name": "Kit Carson County",
    "pop": 6928
  },
  {
    "name": "Lake County",
    "pop": 7387
  },
  {
    "name": "La Plata County",
    "pop": 56278
  },
  {
    "name": "Larimer County",
    "pop": 362771
  },
  {
    "name": "Las Animas County",
    "pop": 14634
  },
  {
    "name": "Lincoln County",
    "pop": 5666
  },
  {
    "name": "Logan County",
    "pop": 21443
  },
  {
    "name": "Mesa County",
    "pop": 157323
  },
  {
    "name": "Mineral County",
    "pop": 925
  },
  {
    "name": "Moffat County",
    "pop": 13160
  },
  {
    "name": "Montezuma County",
    "pop": 26229
  },
  {
    "name": "Montrose County",
    "pop": 43178
  },
  {
    "name": "Morgan County",
    "pop": 28980
  },
  {
    "name": "Otero County",
    "pop": 18555
  },
  {
    "name": "Ouray County",
    "pop": 5046
  },
  {
    "name": "Park County",
    "pop": 17718
  },
  {
    "name": "Phillips County",
    "pop": 4498
  },
  {
    "name": "Pitkin County",
    "pop": 17327
  },
  {
    "name": "Prowers County",
    "pop": 11978
  },
  {
    "name": "Pueblo County",
    "pop": 169504
  },
  {
    "name": "Rio Blanco County",
    "pop": 6461
  },
  {
    "name": "Rio Grande County",
    "pop": 11400
  },
  {
    "name": "Routt County",
    "pop": 25098
  },
  {
    "name": "Saguache County",
    "pop": 6505
  },
  {
    "name": "San Juan County",
    "pop": 741
  },
  {
    "name": "San Miguel County",
    "pop": 8076
  },
  {
    "name": "Sedgwick County",
    "pop": 2331
  },
  {
    "name": "Summit County",
    "pop": 30970
  },
  {
    "name": "Teller County",
    "pop": 24922
  },
  {
    "name": "Washington County",
    "pop": 4865
  },
  {
    "name": "Weld County",
    "pop": 340133
  },
  {
    "name": "Yuma County",
    "pop": 9947
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
