var cityData = [
  {
    "name": "Adams County",
    "pop": 503,375
  },
  {
    "name": "Alamosa County",
    "pop": 16,056
  },
  {
    "name": "Arapahoe County",
    "pop": 643,257
  },
  {
    "name": "Archuleta County",
    "pop": 13,316
  },
  {
    "name": "Baca County",
    "pop": 3,539
  },
  {
    "name": "Bent County",
    "pop": 5,866
  },
  {
    "name": "Boulder County",
    "pop": 322,854
  },
  {
    "name": "Broomfield County",
    "pop": 68,169
  },
  {
    "name": "Chaffee County",
    "pop": 19,623
  },
  {
    "name": "Cheyenne County",
    "pop": 1,835
  },
  {
    "name": "Clear Creek County",
    "pop": 9,625
  },
  {
    "name": "Conejos County",
    "pop": 8,117
  },
  {
    "name": "Costilla County",
    "pop": 3,771
  },
  {
    "name": "Crowley County",
    "pop": 5,749
  },
  {
    "name": "Custer County",
    "pop": 4,859
  },
  {
    "name": "Delta County",
    "pop": 30,578
  },
  {
    "name": "Denver County",
    "pop": 705,651
  },
  {
    "name": "Dolores County",
    "pop": 2,040
  },
  {
    "name": "Douglas County",
    "pop": 335,635
  },
  {
    "name": "Eagle County",
    "pop": 54,662
  },
  {
    "name": "Elbert County",
    "pop": 25,594
  },
  {
    "name": "El Paso County",
    "pop": 701,283
  },
  {
    "name": "Fremont County",
    "pop": 47,521
  },
  {
    "name": "Garfield County",
    "pop": 59,167
  },
  {
    "name": "Gilpin County",
    "pop": 6,000
  },
  {
    "name": "Grand County",
    "pop": 15,297
  },
  {
    "name": "Gunnison County",
    "pop": 16,871
  },
  {
    "name": "Hinsdale County",
    "pop": 791
  },
  {
    "name": "Huerfano County",
    "pop": 6,605
  },
  {
    "name": "Jackson County",
    "pop": 1,375
  },
  {
    "name": "Jefferson County",
    "pop": 575,193
  },
  {
    "name": "Kiowa County",
    "pop": 1,364
  },
  {
    "name": "Kit Carson County",
    "pop": 7,154
  },
  {
    "name": "Lake County",
    "pop": 7,705
  },
  {
    "name": "La Plata County",
    "pop": 55,619
  },
  {
    "name": "Larimer County",
    "pop": 343,853
  },
  {
    "name": "Las Animas County",
    "pop": 14,197
  },
  {
    "name": "Lincoln County",
    "pop": 5,526
  },
  {
    "name": "Logan County",
    "pop": 21,893
  },
  {
    "name": "Mesa County",
    "pop": 151,900
  },
  {
    "name": "Mineral County",
    "pop": 752
  },
  {
    "name": "Moffat County",
    "pop": 13,112
  },
  {
    "name": "Montezuma County",
    "pop": 26,074
  },
  {
    "name": "Montrose County",
    "pop": 41,763
  },
  {
    "name": "Morgan County",
    "pop": 28,075
  },
  {
    "name": "Otero County",
    "pop": 18,370
  },
  {
    "name": "Ouray County",
    "pop": 4,783
  },
  {
    "name": "Park County",
    "pop": 17,892
  },
  {
    "name": "Phillips County",
    "pop": 4,275
  },
  {
    "name": "Pitkin County",
    "pop": 17,875
  },
  {
    "name": "Prowers County",
    "pop": 12,004
  },
  {
    "name": "Pueblo County",
    "pop": 165,974
  },
  {
    "name": "Rio Blanco County",
    "pop": 6,345
  },
  {
    "name": "Rio Grande County",
    "pop": 11,251
  },
  {
    "name": "Routt County",
    "pop": 25,178
  },
  {
    "name": "Saguache County",
    "pop": 6,631
  },
  {
    "name": "San Juan County",
    "pop": 714
  },
  {
    "name": "San Miguel County",
    "pop": 7,967
  },
  {
    "name": "Sedgwick County",
    "pop": 2,314
  },
  {
    "name": "Summit County",
    "pop": 30,555
  },
  {
    "name": "Teller County",
    "pop": 24,625
  },
  {
    "name": "Washington County",
    "pop": 4,921
  },
  {
    "name": "Weld County",
    "pop": 304,435
  },
  {
    "name": "Yuma County",
    "pop": 10,075
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

  cities = shuffle(cityData);
  round1slots = $('.round1')

  var i;
  for (i = 0; i < 64; i++) {
    var city = cities.pop()
    round1slots[i].textContent = city["name"];
    round1slots[i].setAttribute("data-pop", city["pop"]);
    round1slots[i].classList.add("active")
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
