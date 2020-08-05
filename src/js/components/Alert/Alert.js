import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Aux from '../../hoc/Aux';
import { clear as clearAlert } from '../../store/Alert/alertActions';

const alert = props => {
  const alertState = useSelector(state => state.alertReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if(alertState.type !== 'success')
      dispatch(clearAlert());
    else
      setTimeout(function() { dispatch(clearAlert()) }, 5000);

  },[props.history, props.location]);

  return(
    <Aux>
      {
        alertState.message ?
          <div className="alert-container">
            <Alert color={alertState.type}>{ alertState.message }</Alert>
          </div> : null
      }
    </Aux>
  );

};

export default withRouter(alert);