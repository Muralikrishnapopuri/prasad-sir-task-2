import React, { useContext } from 'react'
import "./styles.css";
import Child from './Child';
import { Usercontext } from './App';
function Parent() {
    let {count,setCount}=useContext(Usercontext);

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"white"}}>
        <div className='Parent' style={{border:"2px solid black",padding:"5rem",display:"flex",flexDirection:"row"}}>
            <div style={{color:"black"}}>
                <h1>I'm Parent</h1>
            <h2 >{count}</h2>
            <div className='btns'>
                <button 
                onClick={()=>{
                    setCount(++count);
                }}
                >+</button>
                <button
                onClick={()=>{
                    setCount(--count);
                }}
                >-</button>
                <button 
                onClick={()=>{
                    setCount(0);
                }}
                >Reset</button>
            </div>
            </div>
            <Child/>
        </div>
        
    </div>
  )
}

export default Parent