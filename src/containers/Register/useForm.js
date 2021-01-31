import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { register } from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';

function useForm() {
  const [form, setForm] = useState({});
  const [FieldErrors, setFieldErrors] = useState({});
  const history = useHistory();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data }
    }
  } = useContext(GlobalContext);

  useEffect(() => {
    if (error) {
      for (const item in error) {
        setFieldErrors({
          ...FieldErrors,
          [item]: error[item][0]
        })
      }
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      history.push('auth/login');
    }
  }, [data])

  console.log("error", error);
  console.log('data', data)

  const onChange = (e, { name, value }) => {
    setForm({
      ...form,
      [name]: value
    })
  }
  // console.log('form', form)

  const registerFormValid = !form.username?.length ||
    !form.first_name?.length ||
    !form.last_name?.length ||
    !form.email?.length ||
    !form.password?.length;

  const onSubmit = () => {
    setFieldErrors({})
    register(form)(authDispatch);
  }
  return { form, onChange, loading, FieldErrors, registerFormValid, onSubmit }
}

export default useForm
