import { getDatabase, ref, set } from 'firebase/database';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Contact(props) {

  const [Name,setname]=useState("");
  const [lastname,setlastname]=useState("");
  const [adresse,setadr]=useState("");
  const [email,setemail]=useState("");
  const [phone,setphone]=useState();
  const [city,setcity]=useState("");
  const [comment,setcomment]=useState("");

  const addCommentToDB=(obj)=>{
    let db=getDatabase()
    let commentref=ref(db,props.DBref+`/${Math.floor(Math.random()*150)}`);
    set(commentref,obj)
  }

  const contactprosses=(e)=>{
    e.preventDefault();
    //! CONTROL SAISIE

    if((Name.trim().length <=2) || (lastname.trim().length <=2) ||
    (adresse.trim().length <=2) || (email.trim().length <=2) ||
    (phone.length !== 8) || (city.trim().length <=2) ||(comment.trim().length <=2) )
    {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Check Inputs !',
    })
    ;return 0}


    //* Creation Objet
    const user ={
      Name,lastname,adresse, email,phone,city,comment,
    order : props.order || 'no Order'   }

    //? Stock In DB
    addCommentToDB(user);
    document.getElementById('contact_form').reset();
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Message went succcessfully!',
    })


  }

  return (
    < div>
<form className="row g-3" id='contact_form'>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input onChange={(e)=>setemail(e.target.value)} type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Last Name</label>
    <input onChange={(e)=>setlastname(e.target.value)} type="text" className="form-control" id="inputEmail4cc" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">First Name</label>
    <input onChange={(e)=>setname(e.target.value)} type="text" className="form-control" id="inputEmail4csq" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Phone</label>
    <input onChange={(e)=>setphone(e.target.value)} type="text" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input onChange={(e)=>setadr(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">City</label>
    <input onChange={(e)=>setcity(e.target.value)} type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>

  <div className="col-12">
  <div className="form-floating">
  <textarea onChange={(e)=>setcomment(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
  <label htmlFor="floatingTextarea">Comments</label>
</div>

  </div>
  <div className="col-12">
    <button onClick={contactprosses} type="submit" className="button">Send</button>
  </div>
</form>

    </div>
  )
}

export default Contact
