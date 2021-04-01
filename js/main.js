var cityData = [
  {
    "name": "Adams County",
    "pop": 517885
  },
  {
    "name": "Alamosa County",
    "pop": 16181
  },
  {
    "name": "Arapahoe County",
    "pop": 656822
  },
  {
    "name": "Archuleta County",
    "pop": 14002
  },
  {
    "name": "Baca County",
    "pop": 3556
  },
  {
    "name": "Bent County",
    "pop": 5798
  },
  {
    "name": "Boulder County",
    "pop": 327164
  },
  {
    "name": "Broomfield County",
    "pop": 70762
  },
  {
    "name": "Chaffee County",
    "pop": 20361
  },
  {
    "name": "Cheyenne County",
    "pop": 1825
  },
  {
    "name": "Clear Creek County",
    "pop": 9740
  },
  {
    "name": "Conejos County",
    "pop": 8161
  },
  {
    "name": "Costilla County",
    "pop": 3872
  },
  {
    "name": "Crowley County",
    "pop": 6032
  },
  {
    "name": "Custer County",
    "pop": 5059
  },
  {
    "name": "Delta County",
    "pop": 31173
  },
  {
    "name": "Denver County",
    "pop": 729239
  },
  {
    "name": "Dolores County",
    "pop": 2037
  },
  {
    "name": "Douglas County",
    "pop": 351528
  },
  {
    "name": "Eagle County",
    "pop": 55070
  },
  {
    "name": "Elbert County",
    "pop": 26686
  },
  {
    "name": "El Paso County",
    "pop": 722493
  },
  {
    "name": "Fremont County",
    "pop": 47645
  },
  {
    "name": "Garfield County",
    "pop": 60168
  },
  {
    "name": "Gilpin County",
    "pop": 6215
  },
  {
    "name": "Grand County",
    "pop": 15718
  },
  {
    "name": "Gunnison County",
    "pop": 17495
  },
  {
    "name": "Hinsdale County",
    "pop": 819
  },
  {
    "name": "Huerfano County",
    "pop": 6854
  },
  {
    "name": "Jackson County",
    "pop": 1383
  },
  {
    "name": "Jefferson County",
    "pop": 583081
  },
  {
    "name": "Kiowa County",
    "pop": 1395
  },
  {
    "name": "Kit Carson County",
    "pop": 7128
  },
  {
    "name": "Lake County",
    "pop": 8081
  },
  {
    "name": "La Plata County",
    "pop": 56272
  },
  {
    "name": "Larimer County",
    "pop": 356938
  },
  {
    "name": "Las Animas County",
    "pop": 14493
  },
  {
    "name": "Lincoln County",
    "pop": 5692
  },
  {
    "name": "Logan County",
    "pop": 2914
  },
  {
    "name": "Mesa County",
    "pop": 154933
  },
  {
    "name": "Mineral County",
    "pop": 764
  },
  {
    "name": "Moffat County",
    "pop": 13252
  },
  {
    "name": "Montezuma County",
    "pop": 26160
  },
  {
    "name": "Montrose County",
    "pop": 42765
  },
  {
    "name": "Morgan County",
    "pop": 28984
  },
  {
    "name": "Otero County",
    "pop": 18281
  },
  {
    "name": "Ouray County",
    "pop": 4934
  },
  {
    "name": "Park County",
    "pop": 18844
  },
  {
    "name": "Phillips County",
    "pop": 4278
  },
  {
    "name": "Pitkin County",
    "pop": 17756
  },
  {
    "name": "Prowers County",
    "pop": 12122
  },
  {
    "name": "Pueblo County",
    "pop": 168110
  },
  {
    "name": "Rio Blanco County",
    "pop": 6307
  },
  {
    "name": "Rio Grande County",
    "pop": 11238
  },
  {
    "name": "Routt County",
    "pop": 25652
  },
  {
    "name": "Saguache County",
    "pop": 6824
  },
  {
    "name": "San Juan County",
    "pop": 726
  },
  {
    "name": "San Miguel County",
    "pop": 8174
  },
  {
    "name": "Sedgwick County",
    "pop": 2229
  },
  {
    "name": "Summit County",
    "pop": 30983
  },
  {
    "name": "Teller County",
    "pop": 25355
  },
  {
    "name": "Washington County",
    "pop": 4742
  },
  {
    "name": "Weld County",
    "pop": 323763
  },
  {
    "name": "Yuma County",
    "pop": 10063
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
