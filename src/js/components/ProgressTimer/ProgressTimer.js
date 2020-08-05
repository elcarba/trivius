import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../UI/ProgressBar'
import Timer from '../Timer/Timer'
import Aux from '../../hoc/Aux';
import { PlayerContext } from '../../context/PlayerContextProvider';

const progressTimer = (props) => {
  const playerContext = useContext(PlayerContext);
  const timeTotal = props.value;
  const [remaining, setRemaining] = useState({...timeTotal});
  const progressBarWidth = remaining * 100 / timeTotal;

  const handleChange = (newValue) => {
    setRemaining(newValue);

    //update value in the playerContextProvider
    playerContext.onChange(newValue);
  };

  return(
    <Aux>
      <ProgressBar value={progressBarWidth.toString()}/>
      <Timer reset={props.reset} value={timeTotal} handleChange={handleChange} />
    </Aux>
  );

};

progressTimer.propTypes = {
  value: PropTypes.number.isRequired,
  reset: PropTypes.bool
};

export default progressTimer;