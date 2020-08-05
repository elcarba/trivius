import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarToggler,
  Collapse
} from 'reactstrap';
import Nav from '../Navigation/Nav';
import Logo from '../Logo/Logo';

const toolbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <Navbar dark color="app" expand="md">
      <Link className="navbar-brand" to="/">
        <Logo/>
      </Link>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>

        <Nav navItems={props.routes} />

      </Collapse>
    </Navbar>
  );

};

toolbar.propTypes = {
  routes: PropTypes.array
};

export default toolbar;