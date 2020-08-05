const validateField = (fieldName, fieldValue, formError, feedbackFormErr) => {
  let formErr = { ...formError };

  for(const [feedBKey, feedBValue] of Object.entries(feedbackFormErr)){
    if(feedBKey === fieldName){
      if(feedBValue.hasOwnProperty("required") && !isNotEmpty(fieldValue))
        formErr[fieldName] = feedBValue['required'];

      else if(feedBValue.hasOwnProperty("min") && isLessThanThreeChars(fieldValue))
        formErr[fieldName] = feedBValue['min'];

      else if(fieldValue && feedBValue.hasOwnProperty("pswMin") && isLessThanSixChars(fieldValue))
        formErr[fieldName] = feedBValue['pswMin'];

    }
  }

  return formErr;
};

const validateAllFields = (formError, feedbackFormErr, objState) => {
  let formErr = { ...formError };

  //Check validations
  for(const [key, value] of Object.entries(objState)){
    formErr = { ...formErr, ...validateField(key, value, formErr, feedbackFormErr) };
  }

  return formErr;
};

const findErrorByKey = (key, formError) => {
  return formError && formError.hasOwnProperty(key);
};

const isLessThanThreeChars = (value) => value.length < 3;

const isLessThanSixChars = (value) => value.length < 6;

const isNotEmpty = (value) => value && value.trim() !== '';

const cleanValidationsBy = (key, formErr, aKeys) => {
  let newFormErr = { ...formErr };

  if(aKeys && aKeys.length){
    for(let i=0; i < aKeys.length; i++){
      if(findErrorByKey(aKeys[i], newFormErr))
        delete newFormErr[aKeys[i]];
    }
  }else{
    if(findErrorByKey(key, newFormErr))
      delete newFormErr[key];
  }

  return newFormErr;
};

const getAllFormError = (feedbackFormErr, formErr) => {
  const err = {};
  for(const [key] of Object.entries(feedbackFormErr)){
    err[key] = findErrorByKey(key, formErr);
  }

  return err;
};

const mapFormFieldsToObjState = (fieldsForm, data) => {
  return fieldsForm.reduce((obj, field) => {
    obj = {
      ...obj,
      [field.id]: !data ? field.value : data[field.id]
    };

    return obj;
  }, {});
};

/* TODO: */
// ADD VALIDATION TO USERNAME: JUST LETTERS AND NUMBERS.
/* END TODO */
export const helper = {
  validateField,
  validateAllFields,
  findErrorByKey,
  isNotEmpty,
  cleanValidationsBy,
  getAllFormError,
  mapFormFieldsToObjState
};