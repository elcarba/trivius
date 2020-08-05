import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const counter = props => {
  const [counter, setCounter] = useState(props.value);
  const finalVal = props.value;

  let delay = 1,
    x = finalVal/props.speed,
    y = 0;

  useEffect(() => {
    if (counter >= finalVal) return;

    y++;
    delay = (x-y);
    const intervalId = setInterval(() => {
      setCounter(counter +1);

    }, delay*10);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);

  }, [counter, finalVal]);

  return(
    <span className={props.animation && counter < finalVal ? `animated-${props.animation}` : null}>
      {counter}{props.children}
    </span>
  );

};

counter.defaultProps = {
  speed: 2,
  animation: 1,
};

counter.propTypes = {
  value: PropTypes.number.isRequired,
  speed: PropTypes.number,
  animation: PropTypes.number,
};

export default counter;