
import sistemaSolar from './sistemaSolar';
import Planeta from './Planeta';
import React, { useState } from 'react';

function App() {

  const [sistemaEstado, setSistemaEstado] = useState(1);
  
  const removeLast = () => {
   const array = [];
    for (var i = 0; i < sistemaEstado.length; i++) {
     array.push(sistemaEstado[i])
    }
    setSistemaEstado(array);
  }

  const sistema = sistemaSolar.map(planeta => {
      return (
        <Planeta
          nombre={planeta.nombre}
          color={planeta.color}
          temperatura={planeta.temperatura}
          imagen={planeta.imagen}
        />
      )
    })
    
  return (
    <div className="center">
      <div className="planetas-wrapper">
        {sistema}
        </div>
      <button onClick={removeLast}>Borrar planeta</button >
      </div>
  )
}

export default App;


