/**
 * Created by luiscarbajal on 09/07/2020.
 */
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/User/userActions';

const logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.logout());

  }, []);

  return( <Redirect to="/login"/> );
};

export default logout;