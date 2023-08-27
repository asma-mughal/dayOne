import React from 'react'

const RuffWork = () => {
const getArea =(length, width) =>{
console.log(length * width);
}
const getPerimeter = (length, width) =>{
 console.log(2 * (length + width))
}
  return (
    <div>
      <button onClick={()=> getPerimeter(3,4)}>Click to Perform</button>
    </div>
  )
}

export default RuffWork
