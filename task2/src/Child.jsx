import React, { useContext } from 'react'
import "./styles.css";
import { Usercontext } from './App';

function Child() {
  let {count,setCount}=useContext(Usercontext);
  return (
    <div className='Child' style={{border:"2px solid black",padding:"5rem",display:"flex",flexDirection:"row"}}>
    <div style={{color:"black"}}>
        <h1>I'm child</h1>
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
  
</div>
  )
}

export default Child
