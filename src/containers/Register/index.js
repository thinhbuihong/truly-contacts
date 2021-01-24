import React, { useEffect } from 'react'
import { register } from '../../context/actions/register';

function RegisterContainer() {
  useEffect(() => {
    register();
  }, [])
  return (
    <div>
      <h1>Register</h1>
    </div>
  )
}

export default RegisterContainer
