import React from 'react';
import Loader from '../components/UI/Loader';

const loaderContainer = props => {
  if(props.isLoading)
    return <Loader/>;

  return props.children;
};

export default loaderContainer;