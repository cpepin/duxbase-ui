import isEmailValidator from 'validator/lib/isEmail';
import isEmptyValidator from 'validator/lib/isEmpty';

const validate = (value, ...validators) => {
  if (value === undefined) {
    return 'Field is required.';
  }

  const errors = validators.reduce((errs, validator) => {
    const newError = validator(value);

    if (newError) {
      errs.push(newError);
    }

    return errs;
  }, []);

  return errors.length > 0 ? errors[0] : false;
};

const validateRequired = value => {
  return isEmptyValidator(value) ? 'Field is required.' : false;
};

const validateEmail = value => {
  return !isEmailValidator(value) ? 'Please enter a valid email address.' : false;
};

export const isRequired = value => validate(value, validateRequired);
export const isEmail = value => validate(value, validateRequired, validateEmail);
