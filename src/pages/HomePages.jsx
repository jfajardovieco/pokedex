import { useRef } from "react"
import { setTrainerName } from "../stores/slices/trainerName.slice"
import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'

const HomePages = () => {


   const inputName =  useRef()

   const dispatch =  useDispatch()
   const navigate = useNavigate()

const handleSubmit = e => {
e.preventDefault()
 dispatch(setTrainerName(inputName.current.value.trim()))
 navigate('/pokedex')
}

  return (
    <div className="principal">
      <img src="https://i.imgur.com/AYutZOF.png" alt="" />
        <h1>Pokedex</h1>
        <h2>Hi Trainner!</h2>
        <p>To start, pls give me you trainer name</p>
        <form onSubmit={handleSubmit}>
            <input ref={inputName} type="text" />
            <button>Catch them all!</button>
        </form>
    </div>
  )
}

export default HomePages