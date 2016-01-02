$(document).ready(function() {

var questions = [
//Question 1 
{
	question: "Which classic Avenger was NOT featured in the 2012 movie?",
	options: ["The Hulk", "Black Widow", "Iron Man", "Wasp"], 
	answer: 3,
	url: "avengers.jpg"
}, 
//Question 2
{
	question: "Which villain developed a formula capable of turning men into hulking beasts?",
	options: ["Bane", "The Joker", "Hugo Strange", "Dr. Freeze"], 
	answer: 2,
	url: "batmandetective.jpg"
}, 
//Question 3
{
	question: "What war did Captain America fight in?",
	options: ["WWI", "WWII", "Cold War", "Vietnam War"], 
	answer: 1,
	url: "captainamerica.jpg"
}, 
//Question 4
{
	question: "Which of these characters was NOT the Flash?",
	options: ["Barry Allen", "Jesse Chambers", "Bart Allen", "Joey Fox"], 
	answer: 3, 
	url: "flash.jpg"
}, 
//Question 5
{
	question: "What emotion powers the Green Lantern’s ring?",
	options: ["Hope", "Love", "Compassion", "Willpower"], 
	answer: 3,
	url: "green-lantern.jpg"
},
//Question 6
{
	question: "The Hulk has been many colors—which one hasn’t he been?",
	options: ["Green", "Red", "Gray", "Black"], 
	answer: 3, 
	url: "hulk.jpg" 
},
//Question 7
{
	question: "Which of these women was NOT one of Peter Parker’s love interests?",
	options: ["Carol Danvers", "Ashley Kafka", "Felicia Hardy", "Carlie Cooper"], 
	answer: 1,
	url: "spiderman.jpg"
},
//Question 8 
{
	question: "Who killed Superman?",
	options: ["Lex Luthor", "Doomsday", "General Zod", "Solomon Grundy"], 
	answer: 1, 
	url: "superman.jpg" 
},
//Question 9 
{
	question: "In the comics, which member of the X-Men is also an Avenger?",
	options: ["Professor X", "Wolverine", "Colossus", "Cyclops"], 
	answer: 1,
	url: "xmen.jpg"
}
];

/*--- Variables ---*/
var questionNum = 0;
var questionTotal = questions.length;
var correctTotal = 0;
var answerQuestions = 0;



/*--- Display Questions ---*/
function questionDisplay() {                           
	//displays the current question
    $('#modal .content h3').text(questions[questionNum].question);
    $('#choices').empty();
    var choiceTotal = questions[questionNum].options.length;
    for (var i=0; i<choiceTotal; i++) {                  
    	//displays the answer choices
    	$('#choices').append("<li> <input type='radio' class='option' id='option' name='option' value=" + i + ">" + " " + questions[questionNum].options[i] + "</li>");
    }
}
	$('#submit-answer').on('click', function() {
		var userAnswer = parseInt($('input[name=option]:checked').val());
		console.log(userAnswer);
		var correctAnswer = questions[questionNum].answer;
		if (userAnswer == correctAnswer) {
			correctTotal++;
		}
		answerQuestions++;
		console.log("Answered questions = " + answerQuestions);
		console.log(questionTotal);
	  	if (answerQuestions == questionTotal) {
	  		$("#question-modal").hide();
	  		$(".result-section").show();
			$('#show-score').html("Your final score is " + correctTotal + " / " + questionTotal +"<br><a href='#' class='new-game' onClick='window.location.reload();return false;'>New Game</a>");
	  	}
	});

	/*--- Display information modal box ---*/
  	$("#avengers, #batman, #america, #flash, #lantern, #hulk, #spiderman, #superman, #men").click(function(){
    	$(".overlay").fadeIn(1000);
    	questionNum = $(this).attr("index"); 
    	questionDisplay();
    	scrollToTop();
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	function scrollToTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
});
