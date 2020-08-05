import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const button = (props) => (
  <Button
    color={props.color ? props.color : 'app'}
    disabled={props.disabled}
    size={props.size}
    style={props.styles}
    block={props.block}
    onClick={props.handleClick}
  >
    {props.children}
  </Button>
);

button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  block: PropTypes.bool,
  clicked: PropTypes.func,
  children: PropTypes.node,
  handleClick: PropTypes.func,
  styles: PropTypes.object
};

export default button;