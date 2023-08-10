import React from 'react'
import passanger from '../assets/passanger (2).png';
const Buttons = () => {
  return (
   <div className='flex flex-col justify-start itens-start p-5'>
   <div class="grid  justify-start grid-rows-1 grid-flow-col gap-4">
  <button className='bg-blue-500 rounded-md  hover:-translate-y-1 hover:scale-110
  transition ease-in-out delay-150 text-white p-2'> Default</button>
</div>
<div class="grid justify-start grid-rows-1 grid-flow-col gap-4 mt-8">
<button className='bg-gray-200 rounded-md text-gray-400 p-2' disabled> Default</button>
<button className='bg-transparent rounded-md text-gray-400 p-2' variant="text" disabled> Default</button>
</div>
<div class="grid  justify-start grid-rows-1 grid-flow-col gap-4 mt-8">
<button className='bg-gray-200 rounded-md text-gray-400 p-2 flex items-center justify-center

'>
 <svg class="w-6 h-6 animate-bounce " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
    </svg>
    <span>Default</span>
</button>
<button className='bg-gray-200 rounded-md text-gray-400 p-2 flex items-center justify-center

'>
    <span>Default</span>
 <svg class="w-6 h-6 animate-bounce " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
    </svg>
</button>
</div>
<div class="grid justify-start grid-rows-1 grid-flow-col gap-4 mt-8">
<button className='bg-blue-500 rounded-md text-white p-2 shadow-lg'> Default</button>
<button className='bg-blue-500 rounded-md text-white p-2 w-[110px]  shadow-lg'> Default</button>
<button className='bg-blue-500 rounded-md text-white p-2 w-[130px]  shadow-lg'> Default</button>

</div>
<div class="grid justify-start grid-rows-1 grid-flow-col gap-4 mt-8">
<button className='bg-gray-100 rounded-md text-gray-700 p-2 drop-shadow-md

'> Default</button>
<button className='bg-blue-500 rounded-md text-white p-2 drop-shadow-md'> Default</button>
<button className='bg-gray-500 rounded-md text-white p-2 drop-shadow-md'> Secondary</button>
<button className='bg-red-500 rounded-md text-white p-2 drop-shadow-md'> Danger</button>
</div>
<div class="grid  justify-start grid-rows-1 grid-flow-col gap-4 mt-8">
<button className='bg-gray-200 rounded-md text-gray-700 p-2 '> Default</button>
<button className='bg-blue-700 rounded-md text-white p-2 '> Default</button>
<button className='bg-gray-700 rounded-md text-white p-2 '> Secondary</button>
<button className='bg-red-700 rounded-md text-white p-2 '> Danger</button>
</div>
   </div>
  )
}

export default Buttons
