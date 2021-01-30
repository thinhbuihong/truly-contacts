import React, { useState } from 'react'

function useForm() {
  const [form, setForm] = useState({});

  const onChange = (e, { name, value }) => {
    setForm({
      ...form,
      [name]: value
    })
  }
  console.log('form', form)

  const registerFormValid = !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length ||
    !form.password?.length;

  return { form, onChange, registerFormValid }
}

export default useForm
