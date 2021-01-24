import RegisterComponents from '../containers/Register';
import ContactsComponents from '../containers/Contacts';
import CreateContactComponents from '../containers/CreateContact';
import LoginComponents from '../containers/Login';

export const routes = [
  {
    path: '/auth/register',
    component: RegisterComponents,
    title: 'Register'
  },
  {
    path: '/auth/login',
    component: LoginComponents,
    title: 'Login'
  },
  {
    path: '/',
    component: ContactsComponents,
    title: 'Contacts'
  },
  {
    path: '/contacts/create',
    component: CreateContactComponents,
    title: 'Create Contact'
  },
]