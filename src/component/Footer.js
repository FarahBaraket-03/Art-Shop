import React from 'react'
import { carsousel1,carsousel2,carsousel3,shop,bg,fa,ins,tw,wh} from "./resources"


function Footer() {
  return (
    <div className='footer'>
      <div className='row'> 
      <div className='col-3'>
        <h2>Contact</h2>
        <ul>
          <li><a href='#'>Search Trend</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>the most poplar</a></li>
        </ul>
      </div>
      <div className='col-3'>
        <h2>Information</h2>
        <ul>
          <li><a href='#'>Pricing</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Sell </a></li>
        </ul>
      </div>
      <div className='col-3'>
        <div className='row'>
        <h2>Legal</h2>
        <ul>
          <li><a href='#'>Terms and condition</a></li>
          <li><a href='#'>Copy right</a></li>
          <li><a href='#'>Cookies Policy</a></li>
          <li><a href='#'>Cookies Settings</a></li>
        </ul>
        </div>
        <div className='row'>
        <h2>Support</h2>
        <ul>
          <li><a href='#'>FAQ</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        </div>
      </div>
      <div className='col-3'>
        <div className='row'>
        <h2>Social Media</h2>
        <div className='row'>
          <img src={fa} className='col-3 img-fluid'></img>
          <img src={ins} className='col-3  img-fluid'></img>
          <img src={wh} className='col-3 img-fluid'></img>
          <img src={tw} className='col-3 img-fluid'></img>
        </div>
        </div>
        <div className='row'>
        <h5>Get exclusive assets sent straight to box</h5>
        <button className='btn btn-primary'>Sign Up</button>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Footer
