import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
 <nav className="navbar bg-nav border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ART-SHOP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="admin nav-item text-light">
          <span classname="text-light">Welcome to my website</span>
          <Link className="nav-link active text-info " aria-current="page" to="/Login" >Admin Dashboard</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar
