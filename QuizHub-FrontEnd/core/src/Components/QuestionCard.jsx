import React, { useEffect, useState } from 'react'
import useApi from '../hooks/useAPI'
import Loading from './Loading'
import { Link, NavLink } from 'react-router-dom'
const QuestionCard = () => {
    const [choices, setChoices] = useState({})
    const [answerCheck, setAnswerCheck] = useState("")

    const question = useApi('http://127.0.0.1:8000/quiz/random/');
 
     
    if (!question || Object.keys(question).length === 0) {
      return <Loading />;
    }
   
    
    const clickInput = (e) => {
     setChoices({...choices, [e.target.value]: e.target.checked})
    }
    const handleSubmit = () => {
      let isWrongAnswer = false;
      question.answer.forEach(a => {
        if(a.is_right){
          if(choices[a.id] === undefined || choices[a.id]===false){
            isWrongAnswer = true
            return;
          }
        }
        else if(choices[a.id]===true){
          isWrongAnswer = true
          return;
        }
      })
      if(isWrongAnswer) setAnswerCheck(false)
      else setAnswerCheck(true)
    }

    function Alert(){
      if(answerCheck === false) return (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
          <span className="font-medium">Wrong Answer!</span> Change a few things up and try submitting again.
        </div>
      )
      else if(answerCheck === true) return (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:text-green-600" role="alert">
        <span className="font-medium">Right Answer!</span> Move Ahead with 
          <NavLink
          to= "/random/"
          onClick={()=> window.location.reload()}
          className='text-indigo-600'
          > Next Question</NavLink>
      </div>
      )
      else return (<></>)
    }

  return (
    <>
      <div className="flex w-1/2 flex-col rounded-xl bg-white bg-clip-border text-gray-800 shadow-md mx-auto my-6">
        
        <div className="p-6">
          <div className="flex flex-row place-content-between mb-2 font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            <p>
          {question.technique} ({question.difficulty})
            </p>
            <p>
              {new Date(question.updated_at).toLocaleDateString()}
            </p>
          </div>
          <p className="block text-2xl font-sans font-light leading-relaxed text-inherit antialiased">
          {question.text}
          </p>
          {question.answer.map((a)=>(
              <div key={a.id} className=' text-gray-800 flex flex-row place-content-between my-2 font-semibold cursor-pointer'>
                <input  id={a.id} type="checkbox" className='text-gray-800' value={a.id} onChange={clickInput} />
                <label htmlFor={a.id}>{a.answer_text}</label>
              </div>
            ))
          }
        </div>
        
        <div className="p-6 pt-0">
          <button 
          data-ripple-light="true" 
          type="button" 
          onClick={handleSubmit}
          className="select-none rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full">
            Submit
          </button>
        </div>
    </div>
    <div className='w-1/2 mx-auto'>
      <Alert />
    </div>
    </>
  )
}

export default QuestionCard
