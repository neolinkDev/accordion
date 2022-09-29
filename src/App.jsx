// import React from 'react';
import { useState } from 'react';

import data from './data';
import { Question } from './Question';

function App() {
  
  // hook
  const [ questions, setQuestions ] = useState( data );

  return (
    <main>
      <div className="container">
        <h3>preguntas y respuestas sobre el desarrollo de videojuegos</h3>
        <section className="info">
          {
            questions.map( question => {
              return <Question key={ question.id } { ...question } />
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App;
