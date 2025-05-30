
const questionsArr = [
    {
        question: 'Cats are felines.',
        answer: true
    }
    {
        question: 'Cats like to play fetch.',
        answer: false
    }
    {
        question: 'Cats have whiskers.',
        answer: true
    } 
    {
        question: 'Cats make barking noises.',
        answer: false
    }
    {
        question: 'Cats are the cutest animals.',
        answer: true
    }
]

function runQuiz (questionsArr) {
    let correctAnswers = 0; 

    for (let i = 0; i < questionsArr.length; i++){
        const askedQuestion = questionsArr[i];
        const pickedAnswer = confirm(askedQuestion.question);
        
        if (pickedAnswer === askedQuestion.answer){
            correctAnswers++;
        }

        var totalQuestions = questionsArr.length;
        let percentageCorrect = 0;

        if (totalQuestions > 0){
            percentageCorrect = (correctAnswers / totalQuestions) * 100; 
            alert ("You got " + percentageCorrect + "correct.")
        }


    }
}

runQuiz(questionsArr);

