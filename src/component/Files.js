import React,{ useEffect, useState }  from 'react'
import { getDatabase, onValue,ref, remove, update } from 'firebase/database';
import Swal from 'sweetalert2';

function Files() {
  const [cards,setcards]=useState(null);
  const [currentproduct,setcurrentproduct]=useState(null);
  const [title,settitle]=useState("");
  const [description,setdescription]=useState("");
  const [price,setprice]=useState("");

  function updatework(e,obj){
    e.preventDefault();
    let db=getDatabase()
    let pd=ref(db,"myWorks/"+obj[0]);
    if(pd===null || pd===undefined)  return 0;
    update(pd,{
      DESCRIPTION:description.trim().length===0 ? currentproduct[1].DESCRIPTION : description,
      TITLE:title.trim().length===0 ? currentproduct[1].TITLE : title,
      PRICE: price.trim().length===0 ? currentproduct[1].PRICE : price,
      PICTURE: currentproduct[1].PICTURE
    })
    document.getElementById("model-form").reset();
    setprice("");settitle("");setdescription("");
  }
  
  function deletework(id){
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
        let pdref=ref(db,"myWorks/"+id);
        remove(pdref);
        Swal.fire(
          'Deleted!',
          'Your Product has been deleted.',
          'success'
        )
      }
    })

  }

  const datatomodal=(obj)=>{
    setcurrentproduct(obj);
  }
    const getcards=()=>{
        const db=getDatabase();
        const cardref=ref(db,"myWorks/");
        onValue(cardref,(snap)=>{
            const data=snap.val();
            if(data === null) return null;
            let cleandata=Object.entries(data);
            return setcards(cleandata);
        })
    }
useEffect(()=>{getcards()},[])
  return (
    <div className='container'>
      <table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">N</th>
      <th scope="col">TITLE</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">PRICE</th>
      <th scope="col">PICTURE</th>
      <th scope="col">DELETE</th>
      <th scope="col">MODIFY</th>
    </tr>
  </thead>
  <tbody>
   {
    cards && cards.map((item,index)=>(
    <>  
    <tr>
      <th scope="row">{index}</th>
      <td>{item[1].TITLE}</td>
      <td>{item[1].DESCRIPTION}</td>
      <td>{item[1].PRICE}</td>
      <td><a href={item[1].PICTURE} target='_blank'>{item.PICTURE}</a>
      <br></br>
      <img src={item[1].PICTURE} width={100} height={100} /></td>
      <td><button className='btn btn-outline-danger' onClick={()=>deletework(item[0])}>X</button></td>
      <td><button className='btn btn-outline-success' onClick={()=>{datatomodal(item)}}
      data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Edit</button></td>
    </tr>
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Update</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <form id="modal-form">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" onChange={(e)=>settitle(e.target.value) }  placeholder={currentproduct && currentproduct[1].TITLE} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" onChange={(e)=>setdescription(e.target.value) } placeholder={currentproduct && currentproduct[1].DESCRIPTION} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="number" onChange={(e)=>setprice(e.target.value) } placeholder={currentproduct && currentproduct[1].PRICE} className="form-control" id="exampleInputPassword1" />
  </div>
</form>

        </div>
        <div className="modal-footer">
        <h2 className="modal-title fs-5 text-danger" id="exampleModalToggleLabel">
        <button  className="btn btn-outline-primary " onClick={(e)=>updatework(e,currentproduct)}>update</button>
        </h2>
        </div>
      </div>
    </div>
  </div> 
</>
    ))
   }
  </tbody>
</table>   
    </div>
  )
}

export default Files
