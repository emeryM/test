import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './Header.scss'

export const Header = () => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
        <IndexLink to='/'>
          Access Control Admin
        </IndexLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight bsStyle="tabs">
        <NavItem>
          <Link to='/counter' activeClassName='route--active'>
            Groups
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/lol' activeClassName='route--active'>
            Resources
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/fudge' activeClassName='route--active'>
            ResourceTypes
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
)

export default Header
