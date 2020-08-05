import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../store/User/userActions';
import UserForm from '../../components/Form/UserForm';

class Profile extends Component {
  onSubmitForm = (user) => {
    this.props.saveUser(user);
  };

  render(){
    return (
      <div className="profile-container col-sm-8 col-md-8 col-lg-6 mx-auto mt-5">
        <div className="box-heading">Profile</div>

        <UserForm
          userData={this.props.currentUser}
          editing={true}
          onSubmit={this.onSubmitForm}
          fetching={this.props.fetching}
        />

      </div>
    )
  };
}

const mapStateToProps = state => ({
  fetching: state.userReducer.fetching,
  currentUser: state.userReducer.currentUser,
});

const mapDispatchToProps = dispatch => ({
  saveUser: (user) => dispatch(userActions.updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));