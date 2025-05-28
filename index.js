
var questionArr = [
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

function runQuiz (questionArr) {
    let correctAnswers = 0;
    let allQuestions = questionArr.length;
    
    for (let i =0; i < allQuestions; i++){
        var question = questionArr[i].question;
        var answer = questionArr[i].answer;
        let pickedAnswer = confirm(question)
    }

}