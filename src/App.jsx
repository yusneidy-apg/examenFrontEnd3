import { useState } from "react"; 
import Card from './components/Card'
import NavBar from "./components/NavBar";


function App() {
  const [persona, setPersona] = useState({
    nombre:'',
    tipoMusica:''
  });

  const [mostrar, setMostrar] = useState(false)
  

  const handlerSubmit = (event) =>{
    event.preventDefault();
    console.log("Enviando"); 
    setMostrar(true);
  }
  return (
    <div className="App">
      <h1>Musica preferida</h1>
      <form onSubmit= {(evento) => handlerSubmit(evento)} >
      <label>Nombre:
          <input type="text" name="nombre" onChange={(evento) => setPersona({...persona, name:evento.target.value})}/>
      </label>
      <label>Tipo Musica:
          <input type="text" name="tipoMusica" onChange={(evento) => setPersona({...persona, tipoMusica:evento.target.value})}/>
      </label>
      <button>Enviar</button>
      </form>
      {mostrar ? <Card persona/> : <Card persona/>}
    </div>
  );
}

export default App;