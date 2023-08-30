import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, {useState, useEffect} from 'react'

export const getActivity = async() =>{
  const response = await axios.get('https://www.boredapi.com/api/activity');
  return response.data;
}
const ReactQueryPractice = () => {
 
  const getBored = useQuery({
    queryKey:['bored'],
    queryFn:getActivity
  })
  if(getBored.isLoading) return <h1>Loading...</h1>
  if(getBored.isError) return <h1>{JSON.stringify(getBored.error)}</h1>
  return (
    <div>
      {getBored?.data?.activity}
    </div>
  )
}

export default ReactQueryPractice
function wait(duration) {
  return new Promise(resolve => setTimeout(resolve , duration))
}