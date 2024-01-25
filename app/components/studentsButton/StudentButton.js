import React, { useState } from 'react'

export default function StudentButton() {
    const [data,setData]=useState([])
  return (
    <div>
    <button onClick={getHandler}>See Students</button>
    
    </div>
  )
}
