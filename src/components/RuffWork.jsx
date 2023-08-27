import React from 'react'

const RuffWork = () => {
  function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger + parseInt(secondInteger))
    console.log(parseFloat(firstDecimal) + secondDecimal);
    console.log(firstString + secondString);
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    
}
  return (
    <div>
      <button onClick={()=> performOperation("5",6.0,"Heloow")}>Click to Perform</button>
    </div>
  )
}

export default RuffWork
