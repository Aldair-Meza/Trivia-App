import { Button, Modal } from '@material-ui/core';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Pages/Pages.css'

const Preguntas = ({
  estadoPreg,
  setEstadoPreg,
  preguntas,
  opciones,
  correct,
  ganancia,
  setGanancia,
  setPreguntas,
}) => {

  const [restart, setRestart] = useState(false);
  const [pause, setPause] = useState(false);
  const [visible, setVisible] = useState(false);
    const [select, setSelect] = useState()
    const navigate = useNavigate();
    

    const handleSelect = (i) => {
        if (select === i && select === correct) return "select" ;
        else if (select === i && select !== correct) return "wrong";
        
      };

    const handleCheck = (i) =>{
      
            
        setSelect(i)
        if (i=== correct){          
           setGanancia(ganancia + 1000)
           setEstadoPreg(estadoPreg+1)         
        setSelect()
        select()
      
    } else {
        navigate("/");
    }
    }

 
    

    const handleSalir = () => {
        setEstadoPreg(0);
        setPreguntas();
      };

  return (
    <div className='consulta'>

        <h2>Pregunta {estadoPreg + 1}</h2>

        <div className='pregunta'>
            <h2>{preguntas[estadoPreg].question}</h2>

            <div className='opciones'>            
          {opciones &&
            opciones.map((i) => (
              <button              
                className={`singleOption  ${select && handleSelect(i)}`}
                key={i}                
                onClick={() => handleCheck(i)}
                disabled={select}
              >
                {i}
                </button>
            ))
            }
            </div>
            
        <div className="controles">
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleSalir()}
          >
            Salir
          </Button>

         
          
        </div>
      </div>
    </div>
  );
};

export default Preguntas