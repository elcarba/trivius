import React, { useEffect, useState } from 'react';
import HomeSplash from '../components/Splash/HomeSplash';

const withSplash = (WrappedComponent, name, duration) => {
  const returnSplash = () => <HomeSplash/>;

  const returnComponent = (props, showing) => {
    return showing ? returnSplash() : <WrappedComponent {...props}/>;
  };

  return props => {
    const [showing, setShowing] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowing(false);
      }, (duration*1000));

      // clear interval
      return () => clearTimeout(timer);

    }, []);

    return(
      returnComponent(props, showing)
    )
  };
};

export default withSplash;
