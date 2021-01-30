import React, { useContext } from 'react'
import Header from '../../components/Header'
import { GlobalContext } from '../../context/Provider'

function ContactsContainer() {
  const context = useContext(GlobalContext);
  console.log(context)
  return (
    <div>
      <Header></Header>
      <h1>contacts</h1>
      contacts
    </div>
  )
}

export default ContactsContainer
