import React, { useEffect } from 'react'
import { register } from '../../context/actions/register';
import RegisterUI from '../../layout/Register';
import useForm from './useForm';

function RegisterContainer() {
  useEffect(() => {
    register();
  }, [])
  return (
    <RegisterUI form={useForm()}></RegisterUI>
  )
}

export default RegisterContainer
