import React from 'react';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';

const progressBar = (props) => (

  <Progress color={props.color ? props.color : "red-light"} value={props.value} />

);


progressBar.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default progressBar;