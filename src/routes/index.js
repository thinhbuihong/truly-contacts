import RegisterComponents from '../containers/Register';
import ContactsComponents from '../containers/Contacts';
import CreateContactComponents from '../containers/CreateContact';
import LoginComponents from '../containers/Login';

export const routes = [
  {
    path: '/auth/register',
    component: RegisterComponents,
    title: 'Register',
    needsAuth: false,
  },
  {
    path: '/auth/login',
    component: LoginComponents,
    title: 'Login',
    needsAuth: false,
  },
  {
    path: '/',
    component: ContactsComponents,
    title: 'Contacts',
    needsAuth: true,
  },
  {
    path: '/contacts/create',
    component: CreateContactComponents,
    title: 'Create Contact',
    needsAuth: true,
  },
]