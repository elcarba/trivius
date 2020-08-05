import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

const navItem = (props) => (
  <NavItem>
    <Link to={props.path} className={`nav-link ${ props.disabled ? 'disabled': null }`}>
      {props.children}
    </Link>
  </NavItem>
);

navItem.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node,
  disabled: PropTypes.bool
};

export default navItem;