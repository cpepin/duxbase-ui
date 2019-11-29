import { useCallback, useContext, useMemo, useRef, useState } from 'preact/compat';

import useSetup from 'hooks/useSetup';
import FormContext from 'contexts/FormContext';

const defaultFieldState = {
  dirty: false,
  touched: false,
  isCheckbox: false,
  error: '',
};

function useField({
  validate = () => false,
  validateOnBlur = true,
  validateOnDirty = false,
  name,
  isCheckbox = false,
}) {
  const [error, _setError] = useState(false);
  const { formState, registerField } = useContext(FormContext);
  const inputRef = useRef();
  const fieldState = useRef({ ...defaultFieldState, isCheckbox });

  const setError = newError => {
    fieldState.current.error = newError;
    _setError(newError);
  };

  const getCurrentInputValue = useCallback(() => {
    return isCheckbox ? inputRef.current.checked : inputRef.current.value;
  }, [isCheckbox]);

  const triggerValidation = useCallback(() => {
    const newError = validate(getCurrentInputValue());

    setError(newError);
  }, [validate, formState, setError, getCurrentInputValue]);

  useSetup(() => {
    registerField(name, { fieldState, inputRef, triggerValidation });
  });

  const getState = useCallback(
    () => ({
      ...fieldState.current,
      value: getCurrentInputValue(),
    }),
    [fieldState, inputRef, getCurrentInputValue],
  );

  const onBlur = useCallback(() => {
    fieldState.current.touched = true;
    formState.current.touched = true;

    if (validateOnBlur) {
      triggerValidation();
    }
  }, [fieldState, formState, validateOnBlur, triggerValidation, getState]);

  const onChange = useCallback(() => {
    formState.current.dirty = true;
    fieldState.current.dirty = true;

    if (validateOnDirty || (validateOnBlur && fieldState.current.touched)) {
      triggerValidation();
    }
  }, [fieldState, formState, validateOnDirty, triggerValidation, getState]);

  const data = useMemo(
    () => ({
      getState,
      error,
      fieldProps: {
        onChange,
        onBlur,
        ref: inputRef,
        name,
      },
    }),
    [getState, error, onChange, onBlur, inputRef, name],
  );

  return data;
}

export default useField;
