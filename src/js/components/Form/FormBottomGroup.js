import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import ButtonLoader from '../UI/ButtonLoader';

const formBottomGroup = (props) => (
  <FormGroup className="mt-4">
    <ButtonLoader isLoading={props.isLoading} {...props.configButton}>
      { props.buttonValue }
    </ButtonLoader>

    {
      props.notice && (
        <div className="notice-link text-center mt-3">
          { props.notice } <Link to={ props.noticeLinkTo }> { props.noticeLinkVal } </Link>
        </div>
      )
    }
  </FormGroup>
);

formBottomGroup.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  buttonValue: PropTypes.node,
  configButton: PropTypes.object,
  notice: PropTypes.node,
  noticeLinkTo: PropTypes.string,
  noticeLinkVal: PropTypes.string,
};

export default formBottomGroup;