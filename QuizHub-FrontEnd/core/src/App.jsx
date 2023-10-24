import Navbar from './Components/Navbar'
import './App.css'
import Home from './Components/Home'
import { Outlet } from 'react-router-dom'
import QuestionCard from './Components/QuestionCard'
function App() {


  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto flex flex-col justify-center place-content-center '>
            <div className="flex flex-col justify-center place-content-center mx-auto my-10 max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">QuizHub</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                      Want To Test Your Skills! Check Out our Quizes to Prepare For Your Next Interview.
                    </p>
            </div>
          <hr className='w-full border-2 border-gray-800'/>
          <Outlet />
      </div>
    </div>
  )
}

export default App
