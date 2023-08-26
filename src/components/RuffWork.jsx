import React from 'react'

const RuffWork = () => {
    function init(name)
     { // name is a local variable created by init
        function displayName() {
          // displayName() is the inner function, that forms the closure
          console.log(name); // use variable declared in the parent function
        }
        displayName();
      }
      init("apple");
  return (
    <div>
    </div>
  )
}

export default RuffWork
