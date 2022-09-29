// import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

// componente
export const Question = ({ title, info }) => {

  // hook
  const [ showInfo, setShowInfo ] = useState( false );

  return (
    <article className="question">
      <header>
        <h4>{ title }</h4>
        <button 
          className='btn'
          onClick={ () => setShowInfo( !showInfo ) }
        >
          {/* aplicamos un ternario para los botones - + */}
          { 
            showInfo 
              ? <AiOutlineMinus /> 
              : <AiOutlinePlus /> 
          }
        </button>
      </header>
      {
        // si es true lo renderiza si no, no hace nada 
        showInfo && <p>{ info }</p> 
      }
    </article>
  )
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
}
