import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const timer = (props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
   initTimer();

  }, []);

  const initTimer = () => {
    //Init the value
    setSeconds(props.value);
  };

  useEffect(() => {
    //on Reset
    if(props.reset) initTimer();

    //send value to the parent
    props.handleChange(seconds);

    if(!seconds) return;

    const intervalId = setInterval(() => {
      setSeconds(seconds - 1);

    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);

  }, [seconds, props.reset]);

  return (
    <span>
      {
        "00:" +
          (seconds < 10 ? `0${seconds}` : seconds).toString()
      }
    </span>
  );

};

timer.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
  reset: PropTypes.bool,
};

export default timer;