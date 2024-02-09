import React, { useState } from 'react'
import './Style.css'

const Val = () => {

  const FormText = (props) => {
    const [Text, setText]=useState("Enter your text . . . . . . ");

    
    const handleUpper = () => {
      const newText = Text.toUppercase();
      setText(newText);
    }
const handleLower = () => {
  const newText = Text.toLowerCase();
  setText(newText);
}

    const handleOnChange = (event) => {
    setText(event.target.value)
    }
  }


  return (
   <>
   <div className="bodyy bg-dark">
   <textarea name="" id=""  className='areaa bg-light mx-auto ' cols="30" rows="10" >{Text}</textarea>
   <div className="new py-3">
   <button className='px-3 bg-success' onClick={() => {handleUpper()}}>Upper</button>
   <button className='px-3 bg-success' onClick={() => {handlelower()}}>Lower</button>
   <button className='px-3 bg-success '>Space</button>
   <button className='px-3 bg-success'>Auto</button>
   <button className='px-3 bg-success'>Copy</button>
   </div>
   </div>
   
 
   </>
  )
}

export default Val