import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Route,  Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Trivia from './Pages/Trivia';
//import Respuestas from './components/Preguntas';
import { useState } from 'react';
import axios from 'axios';


function App() {

  
  const [name, setName] = useState()
  const [preguntas, setPreguntas] = useState()
  const [ganancia, setGanancia] = useState(0)

  const fetchpreguntas = async(categoria= '', dificultad='') => {

    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        categoria && `&category=${categoria}`
      }${dificultad && `&difficulty=${dificultad}`}&type=multiple`
      )

    setPreguntas(data.results)
  }

  return (
    
  <>
  <BrowserRouter>
    
    <div className="app" style={{backgroundImage:'url(./test.jpg)'}}>

    
    
     <Header />

     <Routes>
    
        <Route path='/' exact element={<Home 
        name={name}
        setName={setName}
        fetchpreguntas={fetchpreguntas}
        />} />
         
        <Route path='/trivia' exact element={
        <Trivia 
        name={name}
        preguntas={preguntas}
        ganancia={ganancia}
        setGanancia={setGanancia}
        setPreguntas={setPreguntas}
        />} />      
        
        
       
     </Routes>
    
    </div>
  </BrowserRouter>
  </>
   
  );
}

export default App;
