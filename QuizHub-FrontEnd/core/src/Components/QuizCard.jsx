import React from "react"
import { Link } from "react-router-dom"


export default function QuizCard({data}) {
    const title = data.title
    const category = data.category.name
    const date = new Date(data.created_at).toLocaleDateString()
    return (
    <div className="flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-800 shadow-md mx-auto my-6">
        
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Practice Questions for the {category}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link 
          data-ripple-light="true" 
          type="button" 
          to="/quiz/"
          className="select-none rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full">
            Start Quiz
          </Link>
        </div>
    </div>
    )
  }
  