import { useCallback, useContext, useMemo, useRef, useState } from 'preact/compat';

import useSetup from 'hooks/useSetup';
import FormContext from 'contexts/FormContext';

const defaultFieldState = {
  dirty: false,
  touched: false,
};

function useField(opts = {}) {
  const [error, setError] = useState(false);
  const { formState, registerField } = useContext(FormContext);
  const inputRef = useRef();
  const { validate = () => false, validateOnBlur = true, validateOnDirty = false, name } = opts;
  const fieldState = useRef(defaultFieldState);

  const triggerValidation = useCallback(() => {
    const newError = validate(inputRef.current.value);

    setError(newError);
    formState.current.error = newError;
  }, [validate, formState, setError]);

  useSetup(() => {
    registerField(name, { fieldState, inputRef, triggerValidation });
  });

  const getState = useCallback(
    () => ({
      ...fieldState.current,
      value: inputRef.current.value,
    }),
    [fieldState, inputRef],
  );

  const onBlur = useCallback(() => {
    fieldState.current.touched = true;
    formState.current.touched = true;

    if (validateOnBlur) {
      triggerValidation();
    }

    console.log(getState());
  }, [fieldState, formState, validateOnBlur, triggerValidation, getState]);

  const onChange = useCallback(() => {
    formState.current.dirty = true;
    fieldState.current.dirty = true;

    if (validateOnDirty) {
      triggerValidation();
    }

    console.log(getState());
  }, [fieldState, formState, validateOnDirty, triggerValidation, getState]);

  const data = useMemo(
    () => ({
      getState,
      error,
      fieldProps: {
        onChange,
        onBlur,
        ref: inputRef,
      },
    }),
    [getState, error, onChange, onBlur, inputRef],
  );

  console.log({ ...fieldState.current, error });

  return data;
}

export default useField;
