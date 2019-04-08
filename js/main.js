  cityData = [{"name": "Minneapolis", "pop": 411452}, {"name": "St. Paul", "pop": 300820}, {"name": "Rochester", "pop": 112683}, {"name": "Duluth", "pop": 86066}, {"name": "Bloomington", "pop": 85417}, {"name": "Brooklyn Park", "pop": 79462}, {"name": "Plymouth", "pop": 76258}, {"name": "Maple Grove", "pop": 68362}, {"name": "Woodbury", "pop": 67648}, {"name": "St. Cloud", "pop": 67093}, {"name": "Eagan", "pop": 66102}, {"name": "Eden Prairie", "pop": 63660}, {"name": "Blaine", "pop": 62453}, {"name": "Coon Rapids", "pop": 62342}, {"name": "Burnsville", "pop": 61302}, {"name": "Lakeville", "pop": 61056}, {"name": "Minnetonka", "pop": 52102}, {"name": "Apple Valley", "pop": 51109}, {"name": "Edina", "pop": 50603}, {"name": "St. Louis Park", "pop": 48124}, {"name": "Moorhead", "pop": 41801}, {"name": "Mankato", "pop": 41241}, {"name": "Maplewood", "pop": 40127}, {"name": "Shakopee", "pop": 40024}, {"name": "Richfield", "pop": 35993}, {"name": "Cottage Grove", "pop": 35902}, {"name": "Roseville", "pop": 35624}, {"name": "Inver Grove Hts", "pop": 34976}, {"name": "Andover", "pop": 32257}, {"name": "Brooklyn Ctr", "pop": 30885}, {"name": "Savage", "pop": 30011}, {"name": "Oakdale", "pop": 27972}, {"name": "Fridley", "pop": 27573}, {"name": "Winona", "pop": 27153}, {"name": "Shoreview", "pop": 26432}, {"name": "Ramsey", "pop": 25853}, {"name": "Owatonna", "pop": 25613}, {"name": "Chaska", "pop": 25578}, {"name": "Prior Lake", "pop": 25452}, {"name": "White Bear Lk", "pop": 25411}, {"name": "Chanhassen", "pop": 25108}, {"name": "Austin", "pop": 24882}, {"name": "Champlin", "pop": 24209}, {"name": "Elk River", "pop": 23924}, {"name": "Faribault", "pop": 23577}, {"name": "Rosemount", "pop": 23474}, {"name": "Crystal", "pop": 22910}, {"name": "Hastings", "pop": 22620}, {"name": "Farmington", "pop": 22502}, {"name": "New Brighton", "pop": 22440}, {"name": "Golden Valley", "pop": 21208}, {"name": "Lino Lakes", "pop": 20950}, {"name": "New Hope", "pop": 20909}, {"name": "Northfield", "pop": 20297}, {"name": "South St. Paul", "pop": 20280}, {"name": "Columbia Hts", "pop": 19823}, {"name": "West St. Paul", "pop": 19750}, {"name": "Willmar", "pop": 19608}, {"name": "Forest Lake", "pop": 19406}, {"name": "Stillwater", "pop": 19232}, {"name": "Hopkins", "pop": 18217}, {"name": "Albert Lea", "pop": 17716}, {"name": "Anoka", "pop": 17374}, {"name": "St. Michael", "pop": 17128}]

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
