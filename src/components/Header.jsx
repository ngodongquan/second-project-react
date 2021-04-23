import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header () {
  return (
    <header className="header">
      <NavLink className="header_link" to="/blank" activeClassName="header_link_active">
        Second Project
      </NavLink>

      <NavLink className="header_link" to="/photos" activeClassName="header_link_active">
        Photo
      </NavLink>
    </header>
  )
}