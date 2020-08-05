import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const buttonLoader = (props) => (
  <Button {...props}>
    { props.isLoading && <span className="spinner-border spinner-border-sm mr-1"/> }
    { props.children }
  </Button>
);

buttonLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default buttonLoader;