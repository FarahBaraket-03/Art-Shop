import React, { useState } from 'react'
import {getDatabase,ref,set} from"firebase/database";
function Addwork() {

    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const [price,setprice]=useState(30);
    const [picture,setpicture]=useState("https://img.freepik.com/free-photo/user-profile-front-side-with-white-background_187299-40009.jpg?w=740&t=st=1692275329~exp=1692275929~hmac=e3db0e5093105636a5e189f8db256c8b96b2587ce84aab6602780c7541ada9eb");
    const addWorkToDB=(tit,des,price,pic)=>{
        let db=getDatabase();
        let workRef=ref(db,"myWorks/"+Math.floor(Math.random()*100))
        set(workRef,{
            TITLE: tit,
            DESCRIPTION: des,
            PRICE: price,
            PICTURE: pic
        })
    }

    const submitwork=(e)=>{
        e.preventDefault();
        addWorkToDB(title,description,price,picture);
        document.getElementById('addwork').reset ();
        window.alert("product added in DB");
    }

  return (
    <div>
         <form id='addwork'>
         <section className='login'>
        <div className='loginContainer'>
            <h3 className='title'>Add Work</h3>
            <label>Title</label>
            <input onChange={(e)=>settitle(e.target.value)} type='email' autoFocus required></input>
            <label>Description</label>
            <input onChange={(e)=>setdescription(e.target.value)} type='text'  required></input>
            <label>Price</label>
            <input onChange={(e)=>setprice(e.target.value)} type='number'  required></input>
            <label>Picture</label>
            <input onChange={(e)=>setpicture(e.target.value)} type='url'  required></input>
        
            <div className='btncontainer' >
                <button type='submit' onClick={submitwork}>Submit product</button>
                
            </div>
        </div>
      </section>
         </form>
      
    </div>
  )
}

export default Addwork
