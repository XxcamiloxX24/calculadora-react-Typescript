import './App.css'
import Form from 'react-bootstrap/Form';
import MyButtonGroup from './Button'
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [inputUp, setInputUp] = useState("");
  const [inputDown, setInputDown] = useState("");

  function insertarValor(valor: string) {
  const operadores = "+-*/";

  if (valor === "C") {
    setInputUp("");
    setInputDown("");
    return;
  }

  if (valor === "CE") {
    setInputDown(inputDown.slice(0, -1));
    return;
  }

  if (valor === "=") {
    if (inputDown === "") return;
    try {
      
      const resultado = eval(inputDown);
      setInputUp(inputDown + " =");
      setInputDown(resultado.toString());
    } catch {
      setInputDown("Error");
    }
    return;
  }

  
  if (
    operadores.includes(valor) &&                   // si es un operador nuevo
    inputDown.length > 0 &&                         // si ya hay algo escrito
    operadores.includes(inputDown.slice(-1))        // si el último también era operador
  ) {
    return;
  }

  setInputDown(prev => prev + valor);
}


  return (
    <div className='portada'>
      <Container className='hijos'>
        <Form.Control id='InputUp' value={inputUp} disabled />
        <Form.Control id='InputDown' value={inputDown} disabled />
      </Container>
      <MyButtonGroup onInsertarValor={insertarValor}/>
    </div>
  )
}

export default App;
