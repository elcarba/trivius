import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FormBottomGroup from './FormBottomGroup';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { helper } from '../../helpers/FormHelper';
import { config } from '../../config/config';

//import reactFlagsSelect sass module
import 'react-flags-select/scss/react-flags-select.scss';
import ReactFlagsSelect from 'react-flags-select';

const userForm = ({ userData, onSubmit, fetching, editing }) => {
  const feedbackFormErr = {
    name: { required: "Name is required", min: "Name must be at least 3 characters"},
    username: { required: "Username is required", min: "Username must be at least 3 characters" },
    password: { pswMin: "Password must be at least 6 characters" },
    confirmPassword: { pswMin: "Confirm Password must be at least 6 characters" },
    passwordsMatch: "Passwords do not match"
  };

  if(!editing){
    feedbackFormErr.password.required = "Password is required";
    feedbackFormErr.confirmPassword.required = "Confirm Password is required";
  }

  const getFieldsForm = () => {
     return [
        {
          id: 'name',
          label: 'Name',
          type: 'text',
          value: ''
        },
        {
          id: 'username',
          label: 'Username',
          type: 'text',
          value: '',
          disabled: editing
        },
        {
          id: 'password',
          label: 'Password',
          type: 'password',
          value: ''
        },
        {
          id: 'confirmPassword',
          label: 'Confirm Password',
          type: 'password',
          value: ''
        },
        {
          id: 'country',
          label: 'Country',
          type: 'select-flags',
          value: config.COUNTRY_DEFAULT,
          className: 'form-group-country'
        },
      ];
  };

  const getUserState = () => {
    return helper.mapFormFieldsToObjState(
      getFieldsForm(), userData
    );
  };

  const [user, setUser] = useState(getUserState());
  const [formError, setFormError] = useState({});
  const [touchedPwds, setTouchedPwds] = useState({
    password: false,
    confirmPassword: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));

    //handling if the field is touched
    if(!touchedPwds[name])
      setTouchedPwds(touchedPwds => ({ ...touchedPwds, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Control Validations all fields
    const formEValidate = helper.validateAllFields(formError, feedbackFormErr, user);

    //Change state
    setFormError(formEValidate);

    //Check if doesn't find error and submit
    if(Object.keys(formEValidate).length === 0){
      onSubmit(user);
    }
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;

    //Clean prev validations
    const formErr = helper.cleanValidationsBy(name, formError);

    //Control Match Password
    const newFormE = validateMatchPsws(name, value, formErr);

    //Control Validations and update change state
    setFormError(helper.validateField(name, value, newFormE, feedbackFormErr));
  };

  const validateMatchPsws = (fieldName, fieldValue, formErr) => {
    let newFormErr, pswMatched = null;
    const msgPswErr = feedbackFormErr.passwordsMatch;

    //Handling passwords match
    if( helper.isNotEmpty(fieldValue) &&
        (fieldName === 'password' || fieldName === 'confirmPassword')
    ){
      pswMatched = comparePassword(fieldName, 'passwordsMatch', formErr);
      newFormErr = handleMsgPswErr(pswMatched, formErr, fieldName, msgPswErr);
    }

    return newFormErr ? newFormErr : formErr;
  };

  const comparePassword = (name, matchKError, formErr) => {
    let matched = null;

    if(name === 'password' && touchedPwds['confirmPassword']
      || name === 'confirmPassword' && touchedPwds['password']){

      if(user.password === user.confirmPassword){
        matched = true;
        helper.cleanValidationsBy(name, formErr[matchKError]); //Cleaning from errors
      }
      else { matched = false; }
    }

    return matched;
  };

  const handleMsgPswErr = (pswMatched, formErr, key, msgFeedBack) => {
    let newFormErr = null;
    //Clean prev error message
    if(pswMatched === true || pswMatched === false){
      newFormErr = helper.cleanValidationsBy(null, formErr, ['password','confirmPassword']);
    }else{
      newFormErr = { ...formErr };
    }

    //If doesn't match, add the feedback to that field
    if(pswMatched === false)
      newFormErr[key] = msgFeedBack;

    return newFormErr;
  };

  const onSelectCountry = (countryCode) => {
    setUser(user => ({ ...user, country: countryCode }));
  };

  const invalidFields = helper.getAllFormError(feedbackFormErr, formError);

  return (
    <Form onSubmit={handleSubmit}>

      { getFieldsForm().map((field, i) => {
        const fieldId = field.id;
        let sel = null;

        if(field.type === 'select-flags'){
          sel = (
              <ReactFlagsSelect
                className="select-country"
                defaultCountry={user[fieldId]}
                searchable={true}
                searchPlaceholder="Search your Country"
                onSelect={onSelectCountry}
              />
          );
        }

        return(
            <FormGroup key={i} className={field.hasOwnProperty('className') ? field.className : null}>
              <Label for={fieldId}>{field.label}</Label>

              {
                sel ? sel : (
                  <Input
                    id={fieldId}
                    name={fieldId}
                    type={field.type}
                    value={user[fieldId]}
                    disabled={field.disabled}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    invalid={invalidFields[fieldId]}
                  />
                )
              }

              { invalidFields[fieldId] && <FormFeedback>{ formError[fieldId] }</FormFeedback> }
            </FormGroup>
        )
      })}

      {
        !editing ? (
          <FormBottomGroup
            isLoading={fetching}
            buttonValue="Sign Up"
            configButton={{
              color: "app thin",
              size: "lg",
              block: true
            }}
            notice="Have already an account?"
            noticeLinkTo="/login"
            noticeLinkVal="Log In!"
          />
        ): (
          <FormBottomGroup
            isLoading={fetching}
            buttonValue="Save"
            configButton={{
              color: "app thin",
              size: "lg",
              block: true
            }}

          />
        )
      }

    </Form>
  );
};

userForm.propTypes = {
  userData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  editing: PropTypes.bool
};

export default userForm;