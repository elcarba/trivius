import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar';
import Footer from '../Footer/Footer';
import AppTitle from '../AppTitle/AppTitle';
import { config, routes } from '../../config/config';
import Aux from '../../hoc/Aux';
import withSplash from '../../hoc/WithSplash';
import variables from '../../../sass/abstracts/_variables.scss';

const layout = props => (
  <Aux>
    <AppTitle title={config.APP_NAME}/>

    <Toolbar routes={routes}/>

    <main className="content">
      {props.children}
    </main>

    <Footer appName={config.APP_NAME}/>
  </Aux>
);

layout.propTypes = {
  children: PropTypes.node
};

export default withSplash(layout, 'home', parseInt(variables.durationSplashHome));