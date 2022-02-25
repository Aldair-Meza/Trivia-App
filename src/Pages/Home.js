import React, { useState } from 'react'
import {  Button, MenuItem, TextField } from '@material-ui/core'
import './Pages.css'
import categorias, {} from '../data/Categorias'
import { useNavigate } from 'react-router-dom'

const Home = ({name, setName, fetchpreguntas}) => {

  const [categoria, setCategoria] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!categoria || !dificultad || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchpreguntas(categoria, dificultad);
      navigate("/trivia");
    }
  };

  return (
  
     
    <div className='settings_select'>  
      <TextField
      style={{marginBottom:25}}
      label='Ingrese su Nombre'
      variant='outlined'
      onChange={(e) => setName(e.target.value)}
      />
      <p/>
      <TextField
      select label='Seleccionar categoria'
      value={categoria}
      onChange={(e) => setCategoria(e.target.value)}
      variant='outlined'
      style={{marginBottom:30}}           
      
      
      >
      {
        categorias.map((cate) => (

          <MenuItem key={cate.name} value={cate.id}>
            {cate.name}

          </MenuItem>
        ) )
      }
      </TextField>
     
      <p/>
      <TextField
      select label='Seleccionar dificultad' 
      value={dificultad}
      onChange={(e) => setDificultad(e.target.value)}
      variant='outlined'
      style={{marginBottom:30}}
      >
        <MenuItem key='Easy' value='easy'>
          Facil        
        </MenuItem>
        <MenuItem key='Medium' value='medium'>
          Intermedio        
        </MenuItem>
        <MenuItem key='Hard' value='hard'>
          Dificil        
        </MenuItem>
        </TextField>

        <Button variant='container' color='primary' size='large'
        onClick={handleSubmit}
        >
          Iniciar Prueba
        </Button>
    </div>
 

  )
}

export default Home