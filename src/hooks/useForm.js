import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(chave, v) {
    setValues({
      ...values,
      [chave]: v,
    });
  }

  function handleChange(eventInfo) {
    const { name, value } = eventInfo.target;
    setValue(
      name,
      value,
    );
  }

  function formClear() {
    setValues(initialValues);
  }

  return {
    handleChange,
    values,
    formClear,
  };
}

export default useForm;
