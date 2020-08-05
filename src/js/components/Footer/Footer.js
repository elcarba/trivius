import React from 'react';
import PropTypes from 'prop-types';

const footer = ({appName}) => (

  <footer className="footer text-white fixed-bottom">
    <div className="text-center">
      &copy; 2020 {appName}.
    </div>
  </footer>

);

footer.propTypes = {
  appName: PropTypes.string.isRequired
};

export default footer;