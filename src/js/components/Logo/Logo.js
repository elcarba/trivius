import React from 'react';
import Logo from '../../../assets/images/logo.png';

const logo = (props) => (
  <div className="logo" >
    <img src={Logo} className="img-fluid" alt="logo"/>
  </div>
);

export default logo;