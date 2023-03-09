

function Card(props) {
 
    return (
      <div>
        <h3>Hola {props.persona.nombre}</h3>
        <span>Te gusta escuchar {props.persona.tipoMusica}</span>
      </div>
    );
  }
  
  export default Card;
  