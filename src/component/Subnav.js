import React from 'react'
import { carsousel1,carsousel2,carsousel3,shop,bg} from './resources'
function Subnav() {
  return (
    <div className='nav-menu text-center'>
       <nav className="navbar navbar-expand-lg   ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse item" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Shop</a>
      </li>
      <li className='nav-item'>
      <img src="https://img.freepik.com/free-vector/illustration-paint-colour_53876-5925.jpg?w=740&t=st=1692170563~exp=1692171163~hmac=a73440fb55cf61a47fbc7c66918d81b6b93c9ebf537f12c007678b4e5557303d"></img>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Privacy policy</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact Us</a>
      </li>
      
    </ul>
  </div>
</nav>

      
    </div>
  )
}

export default Subnav

