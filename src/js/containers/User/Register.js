import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../store/User/userActions';
import UserForm from '../../components/Form/UserForm';

class Register extends Component {
  componentWillUnmount(){
    //Clean & reset registerStore
    this.props.registerReset();
  }

  componentDidUpdate(){
    //Check user logged in
    if(this.props.registered || this.props.loggedIn)
      this.props.history.push("/login");
  }

  onSubmitForm = (user) => {
    this.props.register(user);
  };

  render(){
    return (
      <div className="register-container col-sm-8 col-md-8 col-lg-6 mx-auto mt-5">
        <div className="box-heading">Sign Up</div>

        <UserForm
          fetching={this.props.registering}
          onSubmit={this.onSubmitForm}
        />

      </div>
    )
  };
}

const mapStateToProps = state => ({
  registering: state.userReducer.registering,
  registered: state.userReducer.registered,
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  register: (user) => dispatch(userActions.register(user)),
  registerReset: () => dispatch(userActions.registerReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));