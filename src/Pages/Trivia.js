import './Pages.css'
import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Preguntas from '../components/Preguntas'
import { BrowserRouter as Route, Routes, Router, BrowserRouter } from 'react-router-dom'
import NavbarD, { Navbar } from '../components/NavbarD'



const Trivia = ({name, ganancia, preguntas, setPreguntas, setGanancia}) => {

  const [opciones, setOpciones] = useState()
  const [estadoPreg, setEstadoPreg] = useState(0)

  useEffect(() => {
   console.log(preguntas)

   setOpciones(
     preguntas &&
      handleShuffle([
     preguntas[estadoPreg]?.correct_answer,
     ...preguntas[estadoPreg]?.incorrect_answers,
  ])
  )
  
  }, [ preguntas, estadoPreg])

  console.log(opciones);

  const handleShuffle=(opciones) =>{
    return opciones.sort(()=>Math.random() - 0.5)
  }
  
  return (
    
    
    <div className='trivia'>

    
  

      
     
      <span className='subtitle'>
       
        </span>

        {preguntas? (
        <>
          <div className='info'>
          <NavbarD name={name} difficulty={preguntas[estadoPreg].difficulty} ganancia={ganancia}/>      
          
          </div>

          <Preguntas
          estadoPreg={estadoPreg}
          setEstadoPreg={setEstadoPreg}
          preguntas={preguntas}
          opciones={opciones}
          correct={preguntas[estadoPreg]?.correct_answer}
          ganancia={ganancia}
          setGanancia={setGanancia}
          setPreguntas={setPreguntas}
          />

        </> 
        ):(
            <CircularProgress style={{margin:100}}
            color='inherit'
            size={150}
            thickness={1}
            />
          
         ) }


      
    </div>
  )
}

export default Trivia