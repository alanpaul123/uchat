import React, { useState } from 'react'

function InputText({addMessage}) {
    const [message,setMessage]=useState()
    const sendMessage=()=>{
        addMessage({message})
        setMessage("")
    }
  return (
    <div className='inputtext_container'>
        <textarea name="message" placeholder='input message...' id="message" rows="6" onChange={(e)=>setMessage(e.target.value)} ></textarea>
        <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default InputText