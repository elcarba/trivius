import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Button from '../UI/Button';
import rightAudio from '../../../assets/audio/right.mp3';
import wrongAudio from '../../../assets/audio/wrong.mp3';
import useAudio from '../../hooks/useAudio';

const answers = ({answers, handleAnswerClick, points, coins, results}) => {
  let rightAnsId, wrongAnsId = null;

  if(Object.keys(results).length !== 0){
    wrongAnsId = (results.wrong.hasOwnProperty("id") ? results.wrong.id : null);
    rightAnsId = (results.right.hasOwnProperty("id") ? results.right.id : null);

    //Handling feedback audio
    useAudio({ url: wrongAnsId ? wrongAudio :rightAudio, isPlaying: true });
  }

  return(
    <Row>
      <Col sm="12" md="6" className="offset-md-3 text-center mt-3">

        {
          answers.map((answer, i) => {

            return (
              <Button
                key={i}
                handleClick={() => handleAnswerClick(answer.id, points, coins)}
                color={(answer.id === rightAnsId) ? "ans-right" : (
                  (answer.id === wrongAnsId) ? "ans-wrong" : "ans"
                )}
                size="lg"
                block
              >
                {answer.value}
              </Button>
            );

          })
        }

      </Col>
    </Row>
  );
};

answers.propTypes = {
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  coins: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  results: PropTypes.object.isRequired,
};

export default answers;