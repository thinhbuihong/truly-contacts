import { React, createContext, useReducer } from 'react';
import authInitialState from './initalstates/authInitialState';
import contactsInittialState from './initalstates/contactsInittialState';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDisptach] = useReducer(contacts, contactsInittialState);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        contactsState,
        contactsDisptach
      }}>
      {children}
    </GlobalContext.Provider>
  )

}
