import {ref, getDatabase, onValue, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function Inbox() {

  const [comments,setcomments]=useState(null);
  const db=getDatabase();
  const getComments=()=>{
    let dataref=ref(db,'Inbox');
    if(dataref ===null || dataref===undefined){
      setcomments(null);
    }
    const allcomments=ref(db,'Inbox/');
    onValue(allcomments,(snap)=>{
      const data=snap.val();
      if(data==null)return null;
      let cleanData=Object.entries(data);
      setcomments(cleanData);

    })

  }
const deleteCom=(id)=>{
  
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      let db=getDatabase()
      let commentref=ref(db,"Inbox/"+id);
      remove(commentref)
      Swal.fire(
        'Deleted!',
        'Your Comment has been deleted.',
        'success'
      )
    }
    else{
      Swal.fire(
        'Ok!',
        'Your Comment is Save.',
        'success'
      )
      let commentRef = ref(db,'Inbox/'+id);
      remove(commentRef);
       setcomments((prevComments) =>
         prevComments.filter((comment) => comment[0] !== id))
    }
  })
}

  useEffect(()=>{getComments()},[]);
  return (
    <div className='mt-5 container'>
      {comments === null ?(<div className='d-flex justify-content-center align-items-center flex-column' >
      <svg widths={300} height={300} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16">
  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
</svg>
      <h1 className='text-light'>Empty Inbox</h1>
      </div>):(
      <section className='row'>
      {comments && comments.map((item,id)=>(
       <div key={id} className="card mx-2 my-2 col-md-12 col-lg-4 col-sm-12" style={{width: '18rem'}}>
        <div className='icon_del text-danger ' onClick={()=>deleteCom(item[0])}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></div>
<div className="card-body">
  <h5 className="card-title">{item[1].Name} {item[1].lastname}</h5>
  <h6 className="card-subtitle mb-2 text-body-secondary">{item[1].adresse} , {item[1].city}</h6>
  <p className="card-text">Phone : {item[1].phone}</p>
  <a href="#" className="card-text">{item[1].email}</a>
  <h6 class="card-subtitle mb-2 my-2 text-body-secondary">Comment : {item[1].comment}</h6>
</div>
</div>

      ))}
    </section>)}
    </div>
  )
}

export default Inbox
