import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const appTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

appTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default appTitle;