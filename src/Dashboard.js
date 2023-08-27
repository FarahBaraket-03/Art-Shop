import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Addwork from './component/Addwork'
import Files from './component/Files'
import Inbox from './component/Inbox'
import Orders from './component/Orders'

function Dashboard(props) {
    const[comp,setComp]=useState(<Addwork/>)
    const {handlelogout}=props
  return (
    <section className='dashboard'>
        <nav>
            <Link to="/">Home</Link>
            <button onClick={()=>setComp(<Addwork/>)}> Add </button>
            <button onClick={()=>setComp(<Inbox/>)}> Inbox </button>
            <button onClick={()=>setComp(<Orders/>)}> Orders </button>
            <button onClick={()=>setComp(<Files/>)}> Files </button>
            <button onClick={handlelogout}> Logout </button>
        </nav>
        <div>{comp}</div>
    </section>
    
  )
}

export default Dashboard
