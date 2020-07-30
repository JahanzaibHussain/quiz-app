import { questionType, quizType } from '../types/questionTypes'

// Fetching quiz in a single ts file
export const getQuiz = async ( limit : number, level: string ) : Promise< quizType[] > => {

    const data = await fetch(`https://opentdb.com/api.php?amount=${limit}&difficulty=${level}&type=multiple`);
    const { results } = await data.json()
    
    const quiz: quizType[] = results.map( (eachQuestion: questionType) => {
        return {
            question : eachQuestion.question,
            options: eachQuestion.incorrect_answers.concat(eachQuestion.correct_answer),
            correct_answer: eachQuestion.correct_answer,
        }
     })
    return quiz
}