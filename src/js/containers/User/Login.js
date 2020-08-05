/**
 * Created by luiscarbajal on 09/07/2020.
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../store/User/userActions';
import LoginForm from '../../components/Form/LoginForm';

class Login extends Component {
  componentDidUpdate(){
    if(this.props.loggedIn)
      this.props.history.push("/");
  }

  onSubmitForm = (credentials) => {
    const {username, password} = credentials;
    this.props.login(username, password);
  };

  render(){
    return(
      <div className="login-container col-sm-8 col-md-8 col-lg-6 mx-auto mt-5">
        <div className="box-heading">Log In</div>

        <LoginForm
          onSubmit={this.onSubmitForm}
          isLoading={this.props.isLoading}
        />

      </div>
    );
  };
}

const mapStateToProps = state => ({
  isLoading: state.userReducer.isLoading,
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(userActions.login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));