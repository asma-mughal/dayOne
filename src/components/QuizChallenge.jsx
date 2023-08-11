import React, { useEffect, useState } from 'react'
import person from '../assets/9308310.png';
import axios from 'axios';
import { FaCheck, FaTimes } from 'react-icons/fa';
import trophy from '../assets/trophy-55.png';
const QuizChallenge = () => {
  const [quizData, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctOption, setCorrectOption] = useState(null);
  const [count, setCount] = useState(0);
  const [buttonClick , setButtonClick] = useState(0);
  const handleTryAgain = () =>{
    setButtonClick(0)
    setCount(0)
  }
  useEffect(()=>{
  const fetchFunc = async() =>{
  const fetchData = await axios.get("https://restcountries.com/v3.1/all");
  setData(fetchData?.data)
  }
  fetchFunc()
  },[])
  const arrayOptions = [
   {
    id:'A',
    name:'Afghanistan',
   },
   {
    id:'B',
    name:'Canada',
   },
   {
    id:'C',
    name:'Austrialia',
   },
   {
    id:'D',
    name:quizData[currentIndex]?.name?.common,
   }
  ]
  // const shuffleNames = (array) => {
  //   const names = array.map((item) => item.name);
  //   for (let i = names.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [names[i], names[j]] = [names[j], names[i]];
  //   }
  //   return array.map((item, index) => ({
  //     ...item,
  //     name: names[index],
  //   }));
  // };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quizData.length);
    setSelectedOption(null);
    setIsCorrect(false);
    setCorrectOption(null);
    setButtonClick(buttonClick + 1)
  };
  const handleResult =(e, selectedId, name) =>{
    const correctAnswer =quizData[currentIndex]?.name?.common;
    setSelectedOption(selectedId);
    if (name === correctAnswer) {
      setIsCorrect(true);
      setCount(count + 1)
    } else {
      setIsCorrect(false);
      setCorrectOption(correctAnswer);
    }
  }
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-20 flex 
    flex-col items-center">
      <div className='flex items-start flex-col '>
      <h5 className="text-white font-semibold text-start text-2xl mb-4">Country Quiz</h5>
    {buttonClick<5 ? <div className="relative bg-white w-96  h-96 rounded-lg p-5">
      <img className="absolute top-0 right-0  w-20 h-20" src={person} alt="Icon"
      style={{
        top:'-50px'
      }}
      />
    {quizData?.length >0 &&
 
<div className='mt-10'>
<p className='font-semibold text-lg text-start 
text-blue-950'>{quizData[currentIndex]?.capital?.[0]} is the capital of{' '} </p>
{arrayOptions.map((country)=>{
  return (
    <div
    className={`bg-red-400 flex border text-gray-700 ${
      selectedOption === country.id
        ? isCorrect
          ? 'bg-green-600 hover:bg-green-600 hover:text-white'
          : 'bg-red-500 hover:bg-red-600 hover:text-white'
        : correctOption === country.id
        ? 'bg-green-500 hover:bg-green-600 hover:text-white'
        : 'bg-transparent hover:bg-orange-400 hover:text-white'
    } mt-3 p-2 border-slate-200 rounded-lg`}
      onClick={(e)=> handleResult(e, country.id,country?.name)}

      key={country.id}
    >
    <div className="flex items-center">
      {selectedOption === country.id &&
        (isCorrect ? (
          <FaCheck className="mr-2 text-white" />
        ) : (
          <FaTimes className="mr-2 text-white" />
        ))}
      <p className="text-sm">{country.id}</p>
    </div>
    <p className="ml-5 text-sm">{country.name}</p>
  </div>
  )
})}

</div>
}
    <button className="absolute bottom-4 right-4 p-3 rounded-lg
     bg-orange-400 text-white"
     onClick={handleNextClick}
     >
        Next
      </button>
    </div>:  <div className="relative bg-white w-96  h-96 rounded-lg p-5">
      <img className="absolute top-0 right-0  w-20 h-20" src={person} alt="Icon"
      style={{
        top:'-50px'
      }}
      />
     <div className="flex justify-center">
              <img
                className="w-20 h-20"
                src={trophy}
                alt="Icon"
              />
            </div>
            <h5 className="text-blue-950 font-bold text-3xl mt-10
             mb-4">Results</h5>
             <p className='text-blue-950 mb-10'>You got
             
             <span className='text-3xl font-semibold text-green-400'> {count} </span>correct answers</p>
    <button className="self-center p-2 text-sm rounded-lg
     bg-white border-2 border-blue-950  text-blue-950"
     onClick={handleTryAgain}
     >
        Try Again
      </button>
    </div> }
   
      </div>
 
   
  </div>

  )
}

export default QuizChallenge
