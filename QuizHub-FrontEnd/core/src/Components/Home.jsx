import React from 'react'
import { useState, useEffect } from 'react'
import QuizCard from './QuizCard'
import useApi from '../hooks/useAPI'
import Loading from './Loading'
const Home = () => {
      // http://127.0.0.1:8000/quiz/
      // http://127.0.0.1:8000/quiz/questions/Django
      // http://127.0.0.1:8000/quiz/random/Django
      const data = useApi('http://127.0.0.1:8000/quiz/');
     
  if (!data || Object.keys(data).length === 0) {
    return <Loading />;
  }
  return (
          <div className='flex flex-wrap mt-4'>
            {data.map((cardData)=>(<QuizCard key={cardData.id} data = {cardData} /> ))} 
          </div>  
  )
}

export default Home
