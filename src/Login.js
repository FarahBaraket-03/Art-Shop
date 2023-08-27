import React from 'react'
import { Link } from 'react-router-dom'

function Login(props) {
    const {handlelogin,email,password,setEmail,setPassword,emailError,passwordError}=props
  return (
    <>
      <div className='text-center'>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>warning!</strong> You should check in on some of those fields below.
  <p><Link to="/">Back To Home Page</Link></p>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      </div>
      <section className='login'>
        <div className='loginContainer'>
            <h3 className='title'>Login</h3>
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value )} type='email' autoFocus required></input>
            <p className='errormg'>{emailError}</p>
            <label>PassWord:</label>
            <input onChange={(e)=>setPassword(e.target.value )}  type='password'  required></input>
            <p className='errormg'>{passwordError}</p>
            <div className='btncontainer' >
                <button onClick={handlelogin}>Login</button>
                <p className='reset_pwd'>Rsest Password</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login
