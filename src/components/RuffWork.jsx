import React from 'react'

const RuffWork = () => {
function getGrade(score) {
    let grade;
    if(score> 25 && score<=30){
    grade = 'A';
    }
    else if(score>20 && score <=25 ){
      grade = 'B';
    }
    else if(score > 15 && score <= 20){
     grade = 'C';
    }
    else if(score > 10 && score <= 15){
      grade ='D'
    }
    else if(score > 5 && score <=10 ){
      grade = 'E'
    }
    else {
      grade = 'F'
    }
    
    return grade;
}
  return (
    <div>
      <button onClick={()=>{
      const res = getGrade(13)
      console.log(res)
      }}>Click to Perform</button>
    </div>
  )
}

export default RuffWork
