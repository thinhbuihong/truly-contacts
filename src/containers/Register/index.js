import React, { useEffect } from 'react'
import useForm from './useForm';
import RegisterUI from '../../layout/Register';

function RegisterContainer() {
  useEffect(() => {

  }, [])
  return (
    <RegisterUI form={useForm()}></RegisterUI>
  )
}

export default RegisterContainer
