import validator from 'validator';

export const validateForm = values => {
  const errors = {};

  if (validator.isEmpty(values.username)) {
    errors.username = 'Requerido';
  }
  if (validator.isEmpty(values.password)) {
    errors.password = 'Requerido';
  }

  return errors;
};
