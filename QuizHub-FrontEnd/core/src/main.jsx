import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import QuestionCard from './Components/QuestionCard.jsx'
import QuizCard from './Components/QuizCard.jsx'


const quizRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />} />
      <Route path='quiz/' element={<QuestionCard />} />
      <Route path='random/' element = {<QuestionCard />} />   
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={quizRouter} />
  </React.StrictMode>,
)
