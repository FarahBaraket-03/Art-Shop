import { getDatabase, onValue,ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

function Lazy() {

    const [cards,setcards]=useState(null);
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
useEffect(()=>{
  Aos.init({duration:2000})
  getcards()},[])
  return (
    <div className='container d-flex justify-content-between flex-warp'>
      {
        cards && cards.map((item,inbox)=>(
            <div data-aos="fade-up" className="card" style={{width: '18rem'}}>
  <img src={item[1].PICTURE} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item[1].TITLE}</h5>
    <p className="card-text">{item[1].DESCRIPTION}</p>
    <Link to='/Card' state={{product:item}} className="btn btn-success">Byu Now</Link>
  </div>
</div>

        ))
      }
    </div>
  )
}

export default Lazy
