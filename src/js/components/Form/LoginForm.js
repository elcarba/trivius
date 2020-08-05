import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormBottomGroup from './FormBottomGroup';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { helper } from '../../helpers/FormHelper';

const loginForm = ({ onSubmit, isLoading }) => {
  const feedbackFormErr = {
    username: { required: "Username is required", min: "Username must be at least 3 characters" },
    password: { required: "Password is required", pswMin: "Password must be at least 6 characters" },
  };

  const getFieldsForm = () => {
    return [
      {
        id: 'username',
        label: 'Username',
        type: 'text',
        value: ''
      },
      {
        id: 'password',
        label: 'Password',
        type: 'password',
        value: ''
      }
    ];
  };

  const getAuthState = () => {
    return helper.mapFormFieldsToObjState(getFieldsForm());
  };

  const [auth, setAuth] = useState(getAuthState());
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuth(auth => ({ ...auth, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Control Validations all fields
    const formEValidate = { ...helper.validateAllFields(formError, feedbackFormErr, auth) };

    //Change state
    setFormError(formEValidate);

    //Check if doesn't find error and submit
    if(Object.keys(formEValidate).length === 0){
      onSubmit(auth);
    }
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;

    //Clean prev validations
    const formErr = helper.cleanValidationsBy(name, formError);

    //Control Validations and update change state
    setFormError(helper.validateField(name, value, formErr, feedbackFormErr));
  };

  const invalidFields = helper.getAllFormError(feedbackFormErr, formError);

  return (
    <Form onSubmit={handleSubmit}>

      { getFieldsForm().map((field, i) => {
        const fieldId = field.id;

        return(
          <FormGroup key={i}>
            <Label for={fieldId}>{field.label}</Label>
            <Input
              id={fieldId}
              name={fieldId}
              type={field.type}
              value={auth[fieldId]}
              onChange={handleChange}
              onBlur={handleOnBlur}
              invalid={invalidFields[fieldId]}
            />

            { invalidFields[fieldId] && <FormFeedback>{ formError[fieldId] }</FormFeedback> }
          </FormGroup>
        )
      })}

      <FormBottomGroup
        isLoading={isLoading}
        buttonValue="Log In"
        configButton={{
          color: "app thin",
          size: "lg",
          block: true
        }}
        notice="Don't have an account?"
        noticeLinkTo="/signup"
        noticeLinkVal="Sign Up!"
      />

    </Form>
  );
};

loginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default loginForm;