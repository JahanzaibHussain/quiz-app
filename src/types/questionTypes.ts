export type questionType = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
}

export type quizType = {
    correct_answer: string,
    options: string[],
    question: string,
}
