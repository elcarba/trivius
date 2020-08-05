import axios from 'axios';
import { QUESTION_DATA } from '../../data/data';

//TODO: Replace with getQuestionsGame query to server
function shuffleQuestions(questions){
  const res = questions.sort(function() {
    return 0.5 - Math.random();
  });

  return res.slice(questions, 5); //5 is how many question total, -> Number|round..
};

function getQuestions() {

  return axios.get(`https://forkify-api.herokuapp.com/api/get?rId=47746`) //, { user }
    .then(res => {
      console.log("res data", res);

      return shuffleQuestions(QUESTION_DATA);
  });
}

export const questionsService = {
  getQuestions,
};