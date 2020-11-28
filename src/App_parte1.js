
import sistemaSolar from './sistemaSolar';

function App() {
  const sistema = sistemaSolar.map(planeta => {
    return (
      <div>
        <h1>{planeta.nombre}</h1>
        <p>{planeta.temperatura}</p>
        <p>{planeta.color}</p>
        <img src={planeta.imagen} alt="" />
      </div>
    );
  });


  return sistema
}
 

export default App;



