function runQuiz() {
  var questionsArr = [
    {
      question: "Cats are the cutest pets",
      answer: true,
    },
    {
      question: "Cats make barking sounds",
      answer: false,
    },
    {
      question: "Cats play fetch",
      answer: false,
    },
    {
      question: "Cats have four legs and a tail",
      answer: true,
    },
    {
      question: "Cats can be indoor and outdoor pets",
      answer: true,
    },
  ];

  let score = 0;
  var totalQuestions = questionsArr.length;

  for (let i = 0; i < totalQuestions; i++) {
    var currentQuestion = questionsArr[i].question;
    var currentAnswer = questionsArr[i].answer;

    let userAnswer = confirm(
      currentQuestion + "\n\nClick OK for True and Cancel for False"
    );

    if (userAnswer === currentAnswer) {
      score++;
    }

    let percentageCorrect;
    if (totalQuestions > 0) {
      percentageCorrect = (score / totalQuestions) * 100;
    }
    let roundedPercentage = Math.ceil(percentageCorrect);
  }
}
