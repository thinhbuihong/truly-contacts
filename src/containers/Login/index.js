import React, { useContext } from 'react'
import LoginUI from '../../layout/Login';
import useForm from './useForm';

function LoginContainer() {
  return <LoginUI form={useForm()}></LoginUI>
}

export default LoginContainer
