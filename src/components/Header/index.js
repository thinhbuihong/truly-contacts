import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Button, Icon, Image, Menu } from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg';

function Header() {
  const location = useLocation();

  return (
    <Menu secondary pointing>
      <Image src={logo} width={60}></Image>
      <Menu.Item style={{ fontSize: 24 }}
        as={Link} to="/">TrulyContacts</Menu.Item>

      {location.pathname === "/" && <Menu.Item position="right">
        <Button basic primary icon
          as={Link} to="/contacts/create">
          <Icon name="add"></Icon>
          Create Contact
        </Button>
      </Menu.Item>}

      {location.pathname === "/" && <Menu.Item >
        <Button basic color="red" icon>
          <Icon name="log out"></Icon>
          Logout
        </Button>
      </Menu.Item>}
    </Menu>
  )
}

export default Header
