import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import GameLayout from '../../components/Layout/GameLayout';
import Question from '../../components/Question/Question';
import Answers from '../../components/Answers/Answers';
import Categories from './Categories';
import Results from './Results';
import { config } from '../../config/config';
import * as userActions from '../../store/User/userActions';
import * as questionsActions from '../../store/Questions/questionsActions';
import * as gameActions from '../../store/Game/gameActions';

class Game extends Component {

  componentDidUpdate(prevProps){
    if(prevProps.questions !== this.props.questions)
      this.props.startGame(this.props.questions);
  }

  delayAction = (dispatchAction) => {
    const timeO = setTimeout(() => {
      dispatchAction();

      clearTimeout(timeO);
    }, 1000);
  };

  findResultsByQuestion = (results, questId) => {
    if (results && results.length > 0)
      return results.find(curr => curr.questionId === questId) || {};

    return {};
  };

  findAnswerById = (answers, ansId) => answers.find(curr => curr.id === ansId);

  returnCurrAndLastQues = (totalQuestions, remainingQuestions) => {
    return [totalQuestions.length - remainingQuestions.length, totalQuestions.length];
  };

  handleQuesResultAnswer = (quesResult, answerId, currQuestion) => {
    let guessed = false;

    if(Object.keys(quesResult).length === 0){
      quesResult.questionId = currQuestion.id;
      quesResult.questionValue = currQuestion.value;
      quesResult.answers = {};
    }

    if(currQuestion.rightAnsId === answerId){
      guessed = true;
      quesResult.answers.right = this.findAnswerById(currQuestion.answers, answerId);
      quesResult.answers.wrong = {};

    }else{
      quesResult.answers.right = this.findAnswerById(currQuestion.answers, currQuestion.rightAnsId);
      quesResult.answers.wrong = this.findAnswerById(currQuestion.answers, answerId);
    }

    return [quesResult, guessed];
  };

  handleOnAnswer = (answerId, points, coins) => {
    const { results, currQuestion, remainingQuestions } = this.props.game;
    const quesResult = this.findResultsByQuestion(results, currQuestion.id);
    const [ qCurrNum, qLastN ] = this.returnCurrAndLastQues(this.props.questions, remainingQuestions);

    //Handling results on answer the question
    const [qResult, guessed] = this.handleQuesResultAnswer(quesResult, answerId, currQuestion);

    //Add Result to ArrayResults
    this.props.addResult(qResult);

    //Update points and coins
    if(guessed){
      this.props.addCoins(points);
      this.props.addPoints(coins);
    }

    //Delay the nextQuestion to give chance to display the FeedBack for the question answered
    this.delayAction(() => {
      if(qCurrNum === qLastN)
        this.props.showResults();
      else
        this.props.nextQuestion(remainingQuestions)
    });
  };

  gameUI = () => {
    const { totalCoins, totalPoints } = this.props.currentUser;
    const { currCategory, currQuestion, remainingQuestions, results } = this.props.game;
    const [ qCurrNum, qLastN ] = this.returnCurrAndLastQues(this.props.questions, remainingQuestions);
    const { answers, points, coins, value, audioUrl } = currQuestion;

    const quesResult = this.findResultsByQuestion(results, currQuestion.id);
    const answerResult = (Object.keys(quesResult).length !== 0) ? quesResult.answers : {};


    return(
      <GameLayout
       header={
         <Question
           questionVal={value}
           quesCurrNumber={qCurrNum}
           quesLastNumber={qLastN}
           categoryName={currCategory.name}
           totalPoints={totalPoints}
           totalCoins={totalCoins}
           audioUrl={audioUrl}
           durationSong={config.LIMIT_DURATION_SONG}
           questionAnswered={Object.keys(answerResult).length !== 0}
         />
       }
       body={
         <Answers
           answers={answers}
           handleAnswerClick={this.handleOnAnswer}
           points={points}
           coins={coins}
           results={answerResult}
         />
       }
      />
    );
  };

  categoriesUI = () => {
    return (
      <Categories
        onPlay={this.props.fetchQuestions}
        currentCategory={this.props.game.currCategory}
        onChangeCategory={this.props.changeCategory}
      />
    )
  };

  resultsUI = () => {
    const { totalCoins, totalPoints } = this.props.currentUser;
    const { results, currCategory } = this.props.game;

    return(
      <Results
        categoryName={currCategory.name}
        totalPoints={totalPoints}
        totalCoins={totalCoins}
        goBackHandle={this.props.resetGame}
        aResults={results}
      />
    );
  };

  currentUIGame = () => {
    const { isPlaying, showingResults } = this.props.game;

    if(isPlaying)
      return this.gameUI();
    else if(showingResults)
      return this.resultsUI();
    else
      return this.categoriesUI();
  };

  render(){
    return(this.currentUIGame());
  }
}

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  questions: state.questionsReducer.questions,
  game: state.gameReducer,
});

const mapDispatchToProps = dispatch => ({
  addPoints: (points) => dispatch(userActions.increasePoints(points)),
  addCoins: (coins) => dispatch(userActions.increaseCoins(coins)),
  fetchQuestions: () => dispatch(questionsActions.fetchQuestions()),
  startGame: (questions) => dispatch(gameActions.startGame(questions)),
  nextQuestion: (questions) => dispatch(gameActions.nextQuestion(questions)),
  addResult: (questionResult) => dispatch(gameActions.addResult(questionResult)),
  showResults: () => dispatch(gameActions.showResults()),
  resetGame: () => dispatch(gameActions.resetGame()),
  changeCategory: (categories, categoryId) => dispatch(gameActions.changeCategory(categories, categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Game));