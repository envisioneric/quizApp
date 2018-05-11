// array of questions and answers

var questions = [
	{
		question: "Where did Lily go after leaving Marshall?",
		answer: "san francisco"
	},
	{
		question: "What even did Barney do before he got stuck on a subway train?",
		answer: "marathon"
	},
	{
		question: "What color was the reoccuring umbrella?",
		answer: "yellow"
	},
	{
		question: "What did Marshall and Lily name their son?",
		answer: "marvin"
	},
	{
		question: "Where did Robin go after her breakup with Ted?",
		answer: "argentina"
	},
	{
		question: "Who was Ted with at the end of the show?",
		answer: "robin"
	},
	{
		question: "Who did Barney almost marry?",
		answer: "quinn"
	},
	{
		question: "Who is the cupcake girl?",
		answer: "victoria"
	},
	{
		question: "Who stands Ted up at their wedding?",
		answer: "stella"
	},
	{
		question: "What was the name of the mother?",
		answer: "tracy"
	},
];

// loop through each question
for(let i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add questions to
	var el = document.getElementById('question' + [i]);

	// check what question and element is being selected
	console.log(question, el);

	// update text content of each element
	el.textContent = question;
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(let i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer as all lowercase values
		var guess = document.getElementById('answer' + [i]).value.toLowerCase();

		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess)	{
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}