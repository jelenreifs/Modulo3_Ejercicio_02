import React, { useState } from 'react';
import './App.css';


const Planeta = (props) => { 
    const [planeta, setPlaneta] = useState(props);
    
    const removePlaneta = () => { 
        setPlaneta("");
    }

    const showPlaneta = () => { 
    setPlaneta(props);
    }
     
     
    return (
        <div className="planeta-item">
            <h2>{planeta.nombre}</h2>
            <p>Color: {planeta.color}</p>
            <p>Temperatura: {planeta.temperatura}</p>
            <img src={planeta.imagen} alt="" />
            <button onClick={removePlaneta}> Borrar este planeta</button >
               <button onClick={showPlaneta}> Mostrar planeta</button >
         </div> 
        )
}
    

export default Planeta;
