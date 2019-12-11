import { createElement, useCallback, useMemo, useRef, memo } from 'preact/compat';

import FormContext from 'contexts/FormContext';

const defaultFormState = {
  dirty: false,
  touched: false,
  error: false,
  fields: {},
};

function Form({ children, onSubmit: onSubmitProp = () => {}, ...rest }) {
  const formState = useRef(defaultFormState);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      formState.current.dirty = true;
      formState.current.touched = true;
      // Clear existing error
      formState.current.error = '';

      const { fields } = formState.current;
      const values = {};

      Object.keys(fields).forEach(name => {
        const field = fields[name];
        field.fieldState.current.touched = true;
        field.fieldState.current.dirty = true;
        field.triggerValidation();
        values[name] = undefined;

        if (field.inputRef.current) {
          values[name] = field.fieldState.current.isCheckbox
            ? field.inputRef.current.checked
            : field.inputRef.current.value;
        }

        if (field.fieldState.current.error) {
          formState.current.error = field.fieldState.current.error;
        }
      });

      if (!formState.current.error) {
        onSubmitProp(values);
      }
    },
    [onSubmitProp],
  );

  const registerField = useCallback(
    (name, fieldState) => {
      formState.current.fields = { ...formState.current.fields, [name]: fieldState };
    },
    [formState],
  );

  const deregisterField = useCallback(
    name => {
      delete formState.current.fields[name];
    },
    [formState],
  );

  const value = useMemo(() => ({ formState, registerField, deregisterField }), [
    formState,
    registerField,
    deregisterField,
  ]);

  return createElement(
    FormContext.Provider,
    { value },
    createElement('form', { onSubmit, ...rest }, children),
  );
}

export default memo(Form);
