import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressTimer from '../ProgressTimer/ProgressTimer';
import Vicoin from '../Vicoin/Vicoin';
import Vinyl from '../Vinyl/Vinyl';
import { PlayerContextProvider } from '../../context/PlayerContextProvider';
import GameHeaderLayout from '../Layout/GameHeaderLayout';
import Aux from '../../hoc/Aux';
import Counter from '../Counter/Counter';

const question = ({questionVal, categoryName, quesCurrNumber, quesLastNumber,
                durationSong, audioUrl, totalPoints, totalCoins, questionAnswered}) => (
  <PlayerContextProvider
    url={audioUrl}
    stop={questionAnswered}
    lastRound={quesCurrNumber-1 === quesLastNumber }
  >
    <GameHeaderLayout
      leftSideTop={
        <Aux>
          {categoryName}
          <Vinyl/>
        </Aux>
      }
      leftSideBottom={quesCurrNumber + '/' + quesLastNumber}
      mainTop={
        <span>{questionVal}</span>
      }
      mainBottom={
        <ProgressTimer reset={questionAnswered} value={durationSong} />
      }
      rightSideTop={
        <Counter animation={2} speed={10} value={totalPoints}> pts</Counter>
      }
      rightSideBottom={
        <Vicoin animation={1} qty={totalCoins}/>
      }
    />
  </PlayerContextProvider>
);

question.propTypes = {
  questionVal: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  quesCurrNumber: PropTypes.number.isRequired,
  quesLastNumber: PropTypes.number.isRequired,
  durationSong: PropTypes.number,
  audioUrl: PropTypes.string,
  totalPoints: PropTypes.number.isRequired,
  totalCoins: PropTypes.number.isRequired,
  questionAnswered: PropTypes.bool.isRequired,
};

export default question;