import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Provider';

function LoginContainer() {
  const {
    authDispatch,
    authState: {
      auth: { loading, error, data }
    }
  } = useContext(GlobalContext);
  return (
    <div>
      <h1>{data ? 'Welcome' + data.username : 'login here'}</h1>
      login
    </div>
  )
}

export default LoginContainer
