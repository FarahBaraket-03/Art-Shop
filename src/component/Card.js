import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import Contact from './Contact';

function Card() {
 let useloc=useLocation();
 const{product}=useloc.state;
  return (
    <>
    <Navbar></Navbar>
    <div className='container mt-5'>
      {!product && <div>Loading......</div>}
      {product && 
      (<div>
        <div className='mb-5'>
        <img src={product[1].PICTURE} width={300}  />
        <h1>{product[1].TITLE}</h1>
        <h4>{product[1].DESCRIPTION}</h4>
        <h2><span className='text-success'>{product[1].PRICE} </span>DT</h2>
        <button className='btn btn-outline-success fs-5 ' data-bs-target="#exampleModalToggle" data-bs-toggle="modal"> place an order</button>
      </div>
      <Link to='/' className='text-center fs-5'>Retun To Home Page</Link>
      </div>
      )
      }
    </div>
   <div>
  <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Place An Order : <span className='text-danger'> { product[1].TITLE} </span></h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
         <Contact DBref="/Orders" order={product[1]}/>
        </div>
        <div className="modal-footer">
        <h2 className="modal-title fs-5 text-danger" id="exampleModalToggleLabel">Price: { product[1].PRICE} DT </h2>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Card
